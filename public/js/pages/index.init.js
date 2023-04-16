var input, filter, ul, li, a, i, j, div;
function searchUser() {
  for (
    input = document.getElementById("serachChatUser"),
      filter = input.value.toUpperCase(),
      ul = document.querySelector(".chat-room-list"),
      li = ul.getElementsByTagName("li"),
      i = 0;
    i < li.length;
    i++
  ) {
    -1 < li[i].querySelector("p").innerText.toUpperCase().indexOf(filter)
      ? (li[i].style.display = "")
      : (li[i].style.display = "none");
  }
}
function searchContacts() {
  for (
    input = document.getElementById("searchContact"),
      filter = input.value.toUpperCase(),
      list = document.querySelector(".sort-contact"),
      li = list.querySelectorAll(".mt-3 li"),
      div = list.querySelectorAll(".mt-3 .contact-list-title"),
      j = 0;
    j < div.length;
    j++
  ) {
    var e = div[j];
    (txtValue = e.innerText),
      -1 < txtValue.toUpperCase().indexOf(filter)
        ? (div[j].style.display = "")
        : (div[j].style.display = "none");
  }
  for (i = 0; i < li.length; i++)
    (contactName = li[i]),
      (txtValue = contactName.querySelector("h5").innerText),
      -1 < txtValue.toUpperCase().indexOf(filter)
        ? (li[i].style.display = "")
        : (li[i].style.display = "none");
}
function searchContactOnModal() {
  for (
    input = document.getElementById("searchContactModal"),
      filter = input.value.toUpperCase(),
      list = document.querySelector(".contact-modal-list"),
      li = list.querySelectorAll(".mt-3 li"),
      div = list.querySelectorAll(".mt-3 .contact-list-title"),
      j = 0;
    j < div.length;
    j++
  ) {
    var e = div[j];
    (txtValue = e.innerText),
      -1 < txtValue.toUpperCase().indexOf(filter)
        ? (div[j].style.display = "")
        : (div[j].style.display = "none");
  }
  for (i = 0; i < li.length; i++)
    (contactName = li[i]),
      (txtValue = contactName.querySelector("h5").innerText),
      -1 < txtValue.toUpperCase().indexOf(filter)
        ? (li[i].style.display = "")
        : (li[i].style.display = "none");
}
function getLocation() {
  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(showPosition)
    : (x.innerHTML = "Geolocation is not supported by this browser.");
}
function showPosition(e) {
  x.innerHTML =
    "Latitude: " + e.coords.latitude + "<br>Longitude: " + e.coords.longitude;
}
function cameraPermission() {
  navigator.mediaDevices.getUserMedia
    ? navigator.mediaDevices
        .getUserMedia({ video: !0 })
        .then(function (e) {
          video.srcObject = e;
        })
        .catch(function (e) {
          console.log(e);
        })
    : console.log("No");
}
function audioPermission() {
  navigator.mediaDevices.getUserMedia({ audio: !0 }).then(function (e) {
    (window.localStream = e),
      (window.localAudio.srcObject = e),
      (window.localAudio.autoplay = !0);
  });
}
function themeColor(e) {
  var c = window.localStorage.getItem("color"),
    d = window.localStorage.getItem("image");
  document.querySelectorAll(".theme-img , .theme-color").forEach(function (r) {
    r.id == c && (r.checked = !0), r.id == d && (r.checked = !0);
    var e,
      t,
      a,
      s = document.querySelector("input[name=bgcolor-radio]:checked");
    s &&
      ((s = s.id),
      (e = document.getElementsByClassName(s)),
      (t = window
        .getComputedStyle(e[0], null)
        .getPropertyValue("background-color")),
      (a = document.querySelector(".user-chat-overlay")),
      "bgcolor-radio8" == s
        ? ((t = "#4eac6d"), (a.style.background = null))
        : (a.style.background = t),
      (rgbColor = t.substring(t.indexOf("(") + 1, t.indexOf(")"))),
      document.documentElement.style.setProperty("--bs-primary-rgb", rgbColor));
    var i,
      l,
      n = document.querySelector("input[name=bgimg-radio]:checked");
    n &&
      ((n = n.id),
      window.localStorage.setItem("image", n),
      (i = document.getElementsByClassName(n)),
      e &&
        ((l = window
          .getComputedStyle(i[0], null)
          .getPropertyValue("background-image")),
        (document.querySelector(".user-chat").style.backgroundImage = l))),
      r.addEventListener("click", function (e) {
        r.id == c && (r.checked = !0), r.id == d && (r.checked = !0);
        var t,
          a,
          s,
          i = document.querySelector("input[name=bgcolor-radio]:checked");
        i &&
          ((i = i.id),
          (t = document.getElementsByClassName(i)) &&
            ((a = window
              .getComputedStyle(t[0], null)
              .getPropertyValue("background-color")),
            (s = document.querySelector(".user-chat-overlay")),
            "bgcolor-radio8" == i
              ? ((a = "#4eac6d"), (s.style.background = null))
              : (s.style.background = a),
            (rgbColor = a.substring(a.indexOf("(") + 1, a.indexOf(")"))),
            document.documentElement.style.setProperty(
              "--bs-primary-rgb",
              rgbColor
            ),
            window.localStorage.setItem("color", i)));
        var l,
          n,
          o = document.querySelector("input[name=bgimg-radio]:checked");
        o &&
          ((o = o.id),
          window.localStorage.setItem("image", o),
          (l = document.getElementsByClassName(o)),
          t &&
            ((n = window
              .getComputedStyle(l[0], null)
              .getPropertyValue("background-image")),
            (document.querySelector(".user-chat").style.backgroundImage = n)));
      });
  });
}
!(function () {
  var d = !1,
    u = "users-chat",
    n = "images/users/user-dummy-img.jpg",
    m = "users",
    s = window.location.origin + "/doot/layouts/js/dir/",
    f = "",
    v = 1;
  function a() {
    var a = document.getElementsByClassName("user-chat");
    document.querySelectorAll(".chat-user-list li a").forEach(function (e) {
      e.addEventListener("click", function (e) {
        a.forEach(function (e) {
          e.classList.add("user-chat-show");
        });
        var t = document.querySelector(".chat-user-list li.active");
        t && t.classList.remove("active"),
          this.parentNode.classList.add("active");
      });
    }),
      document.querySelectorAll(".sort-contact ul li").forEach(function (e) {
        e.addEventListener("click", function (e) {
          a.forEach(function (e) {
            e.classList.add("user-chat-show");
          });
        });
      }),
      document.querySelectorAll(".user-chat-remove").forEach(function (e) {
        e.addEventListener("click", function (e) {
          a.forEach(function (e) {
            e.classList.remove("user-chat-show");
          });
        });
      });
  }
  (document.getElementById("copyClipBoard").style.display = "none"),
    (document.getElementById("copyClipBoardChannel").style.display = "none");
  function e(e, t) {
    var a = new XMLHttpRequest();
    a.open("GET", s + e, !0),
      (a.responseType = "json"),
      (a.onload = function () {
        var e = a.status;
        t(200 === e ? null : e, a.response);
      }),
      a.send();
  }
  function o() {
    "users" == m
      ? ((document.getElementById("channel-chat").style.display = "none"),
        (document.getElementById("users-chat").style.display = "block"))
      : ((document.getElementById("channel-chat").style.display = "block"),
        (document.getElementById("users-chat").style.display = "none")),
      _(s + "chats.json");
  }
  e("users.json", function (e, t) {
    null !== e
      ? console.log("Something went wrong: " + e)
      : (t[0].favorites.forEach(function (e, t) {
          var a = e.profile
              ? '<img src="' +
                e.profile +
                '" class="rounded-circle avatar-xs" alt=""><span class="user-status"></span>'
              : '<div class="avatar-xs"><span class="avatar-title rounded-circle bg-primary text-white"><span class="username">JP</span><span class="user-status"></span></span></div>',
            s = e.messagecount
              ? '<div class="ms-auto"><span class="badge badge-soft-dark rounded p-1">' +
                e.messagecount +
                "</span></div>"
              : "",
            i = e.messagecount
              ? '<a href="javascript: void(0);" class="unread-msg-user">'
              : '<a href="javascript: void(0);">',
            l = 1 === e.id ? "active" : "";
          document.getElementById("favourite-users").innerHTML +=
            '<li id="contact-id-' +
            e.id +
            '" data-name="favorite" class="' +
            l +
            '">                  ' +
            i +
            '                       <div class="d-flex align-items-center">                          <div class="chat-user-img online align-self-center me-2 ms-0">                              ' +
            a +
            '                          </div>                          <div class="overflow-hidden">                              <p class="text-truncate mb-0">' +
            e.name +
            "</p>                          </div>                          " +
            s +
            "                      </div>                  </a>              </li>";
        }),
        t[0].users.forEach(function (e, t) {
          var a = e.profile
              ? '<img src="' +
                e.profile +
                '" class="rounded-circle avatar-xs" alt=""><span class="user-status"></span>'
              : '<div class="avatar-xs"><span class="avatar-title rounded-circle bg-primary text-white"><span class="username">JL</span><span class="user-status"></span></span></div>',
            s = e.messagecount
              ? '<div class="ms-auto"><span class="badge badge-soft-dark rounded p-1">' +
                e.messagecount +
                "</span></div>"
              : "",
            i = e.messagecount
              ? '<a href="javascript: void(0);" class="unread-msg-user">'
              : '<a href="javascript: void(0);">';
          document.getElementById("usersList").innerHTML +=
            '<li id="contact-id-' +
            e.id +
            '" data-name="direct-message">                  ' +
            i +
            '                   <div class="d-flex align-items-center">                      <div class="chat-user-img online align-self-center me-2 ms-0">                          ' +
            a +
            '                      </div>                      <div class="overflow-hidden">                          <p class="text-truncate mb-0">' +
            e.name +
            "</p>                      </div>                      " +
            s +
            "                  </div>              </a>          </li>";
        }),
        t[0].channels.forEach(function (e, t) {
          var a = e.messagecount
              ? '<div class="flex-shrink-0 ms-2"><span class="badge badge-soft-dark rounded p-1">' +
                e.messagecount +
                "</span></div>"
              : "",
            s = e.messagecount
              ? '<a href="javascript: void(0);" class="unread-msg-user">'
              : '<a href="javascript: void(0);">';
          document.getElementById("channelList").innerHTML +=
            '<li id="contact-id-' +
            e.id +
            '" data-name="channel">                ' +
            s +
            '                     <div class="d-flex align-items-center">                        <div class="flex-shrink-0 avatar-xs me-2">                            <span class="avatar-title rounded-circle bg-soft-light text-dark">#</span>                        </div>                        <div class="flex-grow-1 overflow-hidden">                            <p class="text-truncate mb-0">' +
            e.name +
            "</p>                        </div>                        <div>" +
            a +
            "</div>                        </div>                </a>            </li>";
        })),
      a(),
      document.querySelectorAll("#favourite-users li, #usersList li") &&
        document
          .querySelectorAll("#favourite-users li, #usersList li")
          .forEach(function (l) {
            l.addEventListener("click", function (e) {
              (m = "users"), o(), (u = "users-chat");
              var t = l.getAttribute("id"),
                a = l.querySelector(".text-truncate").innerHTML;
              (document.querySelector(
                ".user-profile-sidebar .user-name"
              ).innerHTML = a),
                (document
                  .getElementById("users-chat")
                  .querySelector(
                    ".text-truncate .user-profile-show"
                  ).innerHTML = a),
                (document.querySelector(
                  ".user-profile-desc .text-truncate"
                ).innerHTML = a),
                (document.querySelector(
                  ".audiocallModal .text-truncate"
                ).innerHTML = a),
                (document.querySelector(
                  ".videocallModal .text-truncate"
                ).innerHTML = a);
              var s = document
                .getElementById(t)
                .querySelector(".avatar-xs")
                .getAttribute("src");
              s
                ? (document
                    .querySelector(".user-own-img .avatar-sm")
                    .setAttribute("src", s),
                  document
                    .querySelector(".user-profile-sidebar .profile-img")
                    .setAttribute("src", s),
                  document
                    .querySelector(".audiocallModal .img-thumbnail")
                    .setAttribute("src", s),
                  document
                    .querySelector(".videocallModal .videocallModal-bg")
                    .setAttribute("src", s))
                : (document
                    .querySelector(".user-own-img .avatar-sm")
                    .setAttribute("src", n),
                  document
                    .querySelector(".user-profile-sidebar .profile-img")
                    .setAttribute("src", n),
                  document
                    .querySelector(".audiocallModal .img-thumbnail")
                    .setAttribute("src", n),
                  document
                    .querySelector(".videocallModal .videocallModal-bg")
                    .setAttribute("src", n));
              var i = l.querySelector(".avatar-xs").getAttribute("src");
              document
                .getElementById("users-conversation")
                .querySelectorAll(".left .chat-avatar")
                .forEach(function (e) {
                  i
                    ? e.querySelector("img").setAttribute("src", i)
                    : e.querySelector("img").setAttribute("src", n);
                }),
                window.stop();
            });
          }),
      document.querySelectorAll("#channelList li").forEach(function (i) {
        i.addEventListener("click", function (e) {
          (u = "channel-chat"), (m = "channel"), o();
          var t = i.getAttribute("id"),
            a = i.querySelector(".text-truncate").innerHTML;
          (document
            .getElementById("channel-chat")
            .querySelector(".text-truncate .user-profile-show").innerHTML = a),
            (document.querySelector(
              ".user-profile-desc .text-truncate"
            ).innerHTML = a),
            (document.querySelector(
              ".audiocallModal .text-truncate"
            ).innerHTML = a),
            (document.querySelector(
              ".videocallModal .text-truncate"
            ).innerHTML = a),
            (document.querySelector(
              ".user-profile-sidebar .user-name"
            ).innerHTML = a);
          var s = document
            .getElementById(t)
            .querySelector(".avatar-xs")
            .getAttribute("src");
          s
            ? (document
                .querySelector(".user-own-img .avatar-sm")
                .setAttribute("src", s),
              document
                .querySelector(".user-profile-sidebar .profile-img")
                .setAttribute("src", s),
              document
                .querySelector(".audiocallModal .img-thumbnail")
                .setAttribute("src", s),
              document
                .querySelector(".videocallModal .videocallModal-bg")
                .setAttribute("src", s))
            : (document
                .querySelector(".user-own-img .avatar-sm")
                .setAttribute("src", n),
              document
                .querySelector(".user-profile-sidebar .profile-img")
                .setAttribute("src", n),
              document
                .querySelector(".audiocallModal .img-thumbnail")
                .setAttribute("src", n),
              document
                .querySelector(".videocallModal .videocallModal-bg")
                .setAttribute("src", n));
        });
      });
  }),
    e("callList.json", function (e, t) {
      null !== e
        ? console.log("Something went wrong: " + e)
        : ((callList = t),
          callList.forEach(function (e, t) {
            var a =
                !0 === e.callVideo
                  ? '<button type="button" class="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".videocallModal"><i class="' +
                    e.callTypeIcon +
                    '"></i></button>'
                  : '<button type="button" class="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".audiocallModal"><i class="' +
                    e.callTypeIcon +
                    '"></i></button>',
              s = e.profile
                ? '<img src="' +
                  e.profile +
                  '" class="rounded-circle avatar-xs" alt="">'
                : '<div class="avatar-xs"><span class="avatar-title rounded-circle bg-danger text-white">RL</span></div>';
            document.getElementById("callList").innerHTML +=
              '<li id="calls-id-' +
              e.id +
              '" >        <div class="d-flex align-items-center">        <div class="chat-user-img flex-shrink-0 me-2">            ' +
              s +
              '        </div>            <div class="flex-grow-1 overflow-hidden">                <p class="text-truncate mb-0">' +
              e.name +
              '</p>                <div class="text-muted font-size-12 text-truncate"><i class="' +
              e.callArrowType +
              '"></i> ' +
              e.dateTime +
              '</div>            </div>            <div class="flex-shrink-0 ms-3">                <div class="d-flex align-items-center gap-3">                    <div>                        <h5 class="mb-0 font-size-12 text-muted">' +
              e.callTime +
              "</h5>                    </div>                    <div>                       " +
              a +
              "                    </div>                </div>            </div>        </div>      </li>";
          })),
        document.querySelectorAll("#callList li").forEach(function (i) {
          i.addEventListener("click", function (e) {
            var t = i.getAttribute("id"),
              a = i.querySelector(".text-truncate").innerHTML;
            (document.querySelector(
              ".videocallModal .text-truncate"
            ).innerHTML = a),
              (document.querySelector(
                ".audiocallModal .text-truncate"
              ).innerHTML = a);
            var s = document
              .getElementById(t)
              .querySelector(".avatar-xs")
              .getAttribute("src");
            s
              ? (document
                  .querySelector(".audiocallModal .img-thumbnail")
                  .setAttribute("src", s),
                document
                  .querySelector(".videocallModal .videocallModal-bg")
                  .setAttribute("src", s))
              : (document
                  .querySelector(".audiocallModal .img-thumbnail")
                  .setAttribute("src", n),
                document
                  .querySelector(".videocallModal .videocallModal-bg")
                  .setAttribute("src", n));
          });
        });
    }),
    e("contacts.json", function (e, t) {
      var i, l;
      null !== e
        ? console.log("Something went wrong: " + e)
        : ((f = t).sort(function (e, t) {
            return e.name.localeCompare(t.name);
          }),
          (l = i = ""),
          f.forEach(function (e, t) {
            var a = e.profile
              ? '<img src="' +
                e.profile +
                '" class="img-fluid rounded-circle" alt="">'
              : '<span class="avatar-title rounded-circle bg-primary font-size-10">FP</span>';
            i =
              '<li>              <div class="d-flex align-items-center">                  <div class="flex-shrink-0 me-2">                      <div class="avatar-xs">                          ' +
              a +
              '                      </div>                  </div>                  <div class="flex-grow-1">                      <h5 class="font-size-14 m-0" >' +
              e.name +
              '</h5>                  </div>                  <div class="flex-shrink-0">                      <div class="dropdown">                          <a href="#" class="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                              <i class="bx bx-dots-vertical-rounded align-middle"></i>                          </a>                          <div class="dropdown-menu dropdown-menu-end">                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i class="bx bx-pencil ms-2 text-muted"></i></a>                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Block <i class="bx bx-block ms-2 text-muted"></i></a>                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Remove <i class="bx bx-trash ms-2 text-muted"></i></a>                          </div>                      </div>                  </div>              </div>          </li>';
            var s =
              '<div class="mt-3" >              <div class="contact-list-title">' +
              e.name.charAt(0).toUpperCase() +
              '                </div>          <ul id="contact-sort-' +
              e.name.charAt(0) +
              '" class="list-unstyled contact-list" >';
            l != e.name.charAt(0) &&
              (document.getElementsByClassName("sort-contact")[0].innerHTML +=
                s),
              (document.getElementById(
                "contact-sort-" + e.name.charAt(0)
              ).innerHTML =
                document.getElementById("contact-sort-" + e.name.charAt(0))
                  .innerHTML + i),
              (l = e.name.charAt(0));
          })),
        document.querySelectorAll(".sort-contact ul li").forEach(function (s) {
          s.addEventListener("click", function (e) {
            (m = "users"), o();
            var t = s.querySelector("li .font-size-14").innerHTML;
            (document.querySelector(
              ".text-truncate .user-profile-show"
            ).innerHTML = t),
              (document.querySelector(
                ".user-profile-desc .text-truncate"
              ).innerHTML = t),
              (document.querySelector(
                ".audiocallModal .text-truncate"
              ).innerHTML = t),
              (document.querySelector(
                ".videocallModal .text-truncate"
              ).innerHTML = t),
              (document.querySelector(
                ".user-profile-sidebar .user-name"
              ).innerHTML = t);
            var a = s
              .querySelector("li .align-items-center")
              .querySelector(".avatar-xs .rounded-circle")
              .getAttribute("src");
            a
              ? (document
                  .querySelector(".user-own-img .avatar-sm")
                  .setAttribute("src", a),
                document
                  .querySelector(".user-profile-sidebar .profile-img")
                  .setAttribute("src", a),
                document
                  .querySelector(".audiocallModal .img-thumbnail")
                  .setAttribute("src", a),
                document
                  .querySelector(".videocallModal .videocallModal-bg")
                  .setAttribute("src", a))
              : (document
                  .querySelector(".user-own-img .avatar-sm")
                  .setAttribute("src", n),
                document
                  .querySelector(".user-profile-sidebar .profile-img")
                  .setAttribute("src", n),
                document
                  .querySelector(".audiocallModal .img-thumbnail")
                  .setAttribute("src", n),
                document
                  .querySelector(".videocallModal .videocallModal-bg")
                  .setAttribute("src", n)),
              document
                .getElementById("users-conversation")
                .querySelectorAll(".left .chat-avatar")
                .forEach(function (e) {
                  a
                    ? e.querySelector("img").setAttribute("src", a)
                    : e.querySelector("img").setAttribute("src", n);
                }),
              window.stop();
          });
        }),
        a();
    }),
    o();
  var t = document.querySelector(".user-profile-sidebar");
  document.querySelectorAll(".user-profile-show").forEach(function (e) {
    e.addEventListener("click", function (e) {
      t.classList.toggle("d-block");
    });
  }),
    window.addEventListener("DOMContentLoaded", function () {
      var e = document.querySelector(
        "#chat-conversation .simplebar-content-wrapper"
      );
      e.scrollTop = e.scrollHeight;
    });
  var i = document.getElementById("chatinputmorecollapse");
  function p(e) {
    var t = document
        .getElementById(e)
        .querySelector("#chat-conversation .simplebar-content-wrapper"),
      a = document.getElementsByClassName("chat-conversation-list")[0]
        ? document
            .getElementById(e)
            .getElementsByClassName("chat-conversation-list")[0].scrollHeight -
          window.innerHeight +
          250
        : 0;
    a && t.scrollTo({ top: a, behavior: "smooth" });
  }
  document.body.addEventListener("click", function () {
    new bootstrap.Collapse(i, { toggle: !1 }).hide();
  }),
    i &&
      i.addEventListener("shown.bs.collapse", function () {
        new Swiper(".chatinput-links", {
          slidesPerView: 3,
          spaceBetween: 30,
          breakpoints: {
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          },
        });
      }),
    document
      .querySelectorAll(".contact-modal-list .contact-list li")
      .forEach(function (e) {
        e.addEventListener("click", function () {
          e.classList.toggle("selected");
        });
      }),
    (document.getElementById("favourite-users").onclick = function () {
      document.getElementById("chat-input").focus();
    }),
    (document.getElementById("usersList").onclick = function () {
      document.getElementById("chat-input").focus();
    }),
    (document.getElementById("channelList").onclick = function () {
      document.getElementById("chat-input").focus();
    });
  var l = document.querySelector("#chatinput-form"),
    g = document.querySelector("#chat-input"),
    y = document.querySelector(".chat-conversation-list");
  document.querySelector(".chat-input-feedback");
  function h() {
    var e = 12 <= new Date().getHours() ? "pm" : "am",
      t =
        12 < new Date().getHours()
          ? new Date().getHours() % 12
          : new Date().getHours(),
      a =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
    return t < 10 ? "0" + t + ":" + a + " " + e : t + ":" + a + " " + e;
  }
  setInterval(h, 1e3);
  var b,
    x,
    r,
    w = 0,
    S = [],
    E = 1;
  document
    .querySelector("#audiofile-input")
    .addEventListener("change", function () {
      var a = document.querySelector(".file_Upload");
      r = document.querySelector("#audiofile-input").files[0];
      var e = new FileReader();
      e.readAsDataURL(r),
        a && a.classList.add("show"),
        e.addEventListener(
          "load",
          function () {
            var e = r.name,
              t = Math.round(r.size / 1e6).toFixed(2);
            (a.innerHTML =
              '<div class="card p-2 border mb-2 audiofile_pre d-inline-block position-relative">            <div class="d-flex align-items-center">                <div class="flex-shrink-0 avatar-xs ms-1 me-3">                    <div class="avatar-title bg-soft-primary text-primary rounded-circle">                        <i class="bx bx-headphone"></i>                    </div>                </div>                <div class="flex-grow-1 overflow-hidden">                <h5 class="font-size-14 text-truncate mb-1">' +
              e +
              '</h5>                  <input type="hidden" name="downloadaudiodata" value="' +
              r +
              '"/>                        <p class="text-muted text-truncate font-size-13 mb-0">' +
              t +
              'mb</p>                </div>                <div class="flex-shrink-0 ms-3">                    <div class="d-flex gap-2">                        <div>                        <i class="ri-close-line text-danger audioFile-remove"  id="remove-audioFile"></i>                        </div>                    </div>                </div>            </div>          </div>'),
              (b = e),
              (x = t),
              removeAudioFile(),
              (S[E] = r);
          },
          !1
        ),
        E++;
    });
  var q,
    k,
    c,
    L = [],
    A = 1;
  document
    .querySelector("#attachedfile-input")
    .addEventListener("change", function () {
      var a = document.querySelector(".file_Upload");
      (c = document.querySelector("#attachedfile-input").files[0]),
        (fr = new FileReader()),
        fr.readAsDataURL(c),
        a && a.classList.add("show"),
        fr.addEventListener(
          "load",
          function () {
            var e = c.name,
              t = Math.round(c.size / 1e6).toFixed(2);
            (a.innerHTML =
              '<div class="card p-2 border attchedfile_pre d-inline-block position-relative">            <div class="d-flex align-items-center">                <div class="flex-shrink-0 avatar-xs ms-1 me-3">                    <div class="avatar-title bg-soft-primary text-primary rounded-circle">                        <i class="ri-attachment-2"></i>                    </div>                </div>                <div class="flex-grow-1 overflow-hidden">                <a href="" id="a"></a>                    <h5 class="font-size-14 text-truncate mb-1">' +
              e +
              '</h5>                    <input type="hidden" name="downloaddata" value="' +
              c +
              '"/>                    <p class="text-muted text-truncate font-size-13 mb-0">' +
              t +
              'mb</p>                </div>                <div class="flex-shrink-0 align-self-start ms-3">                    <div class="d-flex gap-2">                        <div>                        <i class="ri-close-line text-muted attechedFile-remove"  id="remove-attechedFile"></i>                        </div>                    </div>                </div>            </div>          </div>'),
              (q = e),
              (k = t),
              (L[A] = c),
              removeAttachedFile();
          },
          !1
        ),
        A++;
    });
  var C = [];
  removeimg = 1;
  document
    .querySelector("#galleryfile-input")
    .addEventListener("change", function () {
      var s = document.querySelector(".file_Upload");
      s.insertAdjacentHTML(
        "beforeend",
        '<div class="profile-media-img image_pre"></div>'
      );
      var i = document.querySelector(".file_Upload .profile-media-img");
      this.files &&
        [].forEach.call(this.files, function (e) {
          if (!/\.(jpe?g|png|gif)$/i.test(e.name))
            return alert(e.name + " is not an image");
          var t = new FileReader(),
            a = "";
          t.addEventListener("load", function () {
            removeimg++,
              s && s.classList.add("show"),
              C.push(t.result),
              (a +=
                '<div class="media-img-list" id="remove-image-' +
                removeimg +
                '">          <a href="#">              <img src="' +
                this.result +
                '" alt="' +
                e.name +
                '" class="img-fluid">          </a>            <i class="ri-close-line image-remove" onclick="removeImage(`remove-image-' +
                removeimg +
                '`)"></i>          </div>'),
              i.insertAdjacentHTML("afterbegin", a),
              0;
          }),
            t.readAsDataURL(e);
        });
    });
  function M(e, t) {
    var a = C,
      s = document.getElementById(e).querySelector(".chat-conversation-list"),
      i = "";
    a.forEach(function (e) {
      i +=
        '<div class="message-img-list">          <div>            <a class="popup-img d-inline-block" href="' +
        e +
        '" target="_blank">                <img src="' +
        e +
        '" alt="" class="rounded border" width="200" />            </a>          </div>          <div class="message-img-link">            <ul class="list-inline mb-0">              <li class="list-inline-item dropdown">                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                    <i class="bx bx-dots-horizontal-rounded"></i>                </a>          <div class="dropdown-menu">            <a class="dropdown-item d-flex align-items-center justify-content-between" href="' +
        e +
        '" download>Download <i class="bx bx-download ms-2 text-muted"></i></a>            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>            <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>            <a class="dropdown-item d-flex align-items-center justify-content-between delete-image" id="delete-item-' +
        ++w +
        '" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>          </div>        </li>      </ul>    </div>    </div>';
    }),
      null != a &&
        (s.insertAdjacentHTML(
          "beforeend",
          '<li class="chat-list right" id="chat-list-' +
            w +
            '" >        <div class="conversation-list">            <div class="user-chat-content">                <div class="ctext-wrap">                    <div class="ctext-wrap-content">                        <div class="message-img mb-0">' +
            i +
            '                    </div>                    </div>                    </div>                  <div class="conversation-name">                    <small class="text-muted time">' +
            h() +
            '</small>                    <span class="text-success check-message-icon"><i class="bx bx-check"></i></span>                </div>          </div>        </li>'
        ),
        F(),
        y.querySelectorAll(".chat-list").forEach(function (e) {
          e.querySelectorAll(".delete-image").forEach(function (e) {
            e.addEventListener("click", function () {
              1 == e.closest(".message-img").childElementCount
                ? e.closest(".chat-list").remove()
                : e.closest(".message-img-list").remove();
            });
          });
        }),
        B.querySelectorAll(".chat-list").forEach(function (e) {
          e.querySelectorAll(".delete-image").forEach(function (e) {
            e.addEventListener("click", function () {
              1 == e.closest(".message-img").childElementCount
                ? e.closest(".chat-list").remove()
                : e.closest(".message-img-list").remove();
            });
          });
        })),
      document.querySelector(".file_Upload").classList.remove("show"),
      (C = []);
  }
  l &&
    l.addEventListener("submit", function (e) {
      e.preventDefault();
      var t = u,
        a = u,
        s = u,
        i = u,
        l = u,
        n = g.value,
        o = document.querySelector(".image_pre"),
        r = document.querySelector(".attchedfile_pre"),
        c = document.querySelector(".audiofile_pre");
      null != o || null != o
        ? M(a)
        : null != r
        ? (function (e, t, a) {
            (t = q), (a = k);
            w++;
            var s = document
              .getElementById(e)
              .querySelector(".chat-conversation-list");
            null != t &&
              s.insertAdjacentHTML(
                "beforeend",
                '<li class="chat-list right" id="chat-list-' +
                  w +
                  '" >          <div class="conversation-list">              <div class="user-chat-content">                  <div class="ctext-wrap">                      <div class="ctext-wrap-content">                          <div class="p-3 border-primary border rounded-3">                              <div class="d-flex align-items-center attached-file">                                  <div class="flex-shrink-0 avatar-sm me-3 ms-0 attached-file-avatar">                                      <div class="avatar-title bg-soft-primary text-primary rounded-circle font-size-20"><i class="ri-attachment-2"></i></div>                                  </div>                                  <div class="flex-grow-1 overflow-hidden">                                      <div class="text-start">                                          <h5 class="font-size-14 mb-1">' +
                  t +
                  '</h5>                                          <p class="text-muted text-truncate font-size-13 mb-0">' +
                  a +
                  'mb</p>                                          <p class="text-muted text-truncate font-size-13 mb-0"></p>                                      </div>                                  </div>                                  <div class="flex-shrink-0 ms-4">                                      <div class="d-flex gap-2 font-size-20 d-flex align-items-start">                                          <div>                                              <a href="#" class="text-muted download-file" data-id="' +
                  A +
                  '"> <i class="bx bxs-download"></i> </a>                                          </div>                                      </div>                                  </div>                              </div>                          </div>                      </div>                      <div class="dropdown align-self-start message-box-drop">                          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="ri-more-2-fill"></i> </a>                          <div class="dropdown-menu">                          <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>                          <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>                          <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-' +
                  w +
                  '">Copy <i class="bx bx-copy text-muted ms-2"></i></a>                          <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>                          <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Mark as Unread <i class="bx bx-message-error text-muted ms-2"></i></a>                          <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-' +
                  w +
                  '" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>                      </div>                    </div>                  </div>                <div class="conversation-name">                    <small class="text-muted time">' +
                  h() +
                  '</small>                      <span class="text-success check-message-icon"><i class="bx bx-check"></i></span>                    </div>                </div>              </div>            </li>'
              );
            var i = document.getElementById("chat-list-" + w);
            i.querySelectorAll(".delete-item").forEach(function (e) {
              e.addEventListener("click", function () {
                y.removeChild(i);
              });
            }),
              i.querySelectorAll(".download-file").forEach(function (i) {
                i.addEventListener("click", function (e) {
                  e.preventDefault();
                  var t,
                    a,
                    s = i.getAttribute("data-id");
                  window.File &&
                  window.FileReader &&
                  window.FileList &&
                  window.Blob
                    ? ((t = new Blob([L[s]], { type: "application/pdf" })),
                      ((a = document.createElement("a")).href =
                        window.URL.createObjectURL(t)),
                      (a.download = L[s].name),
                      a.click())
                    : alert(
                        "The File APIs are not fully supported in this browser."
                      );
                });
              }),
              document.querySelector(".file_Upload ").classList.remove("show");
          })(s, n)
        : null != c
        ? (function (e, t, a) {
            (t = b), (a = x);
            w++;
            var s = document
              .getElementById(e)
              .querySelector(".chat-conversation-list");
            null != t &&
              s.insertAdjacentHTML(
                "beforeend",
                '<li class="chat-list right" id="chat-list-' +
                  w +
                  '" >          <div class="conversation-list">              <div class="user-chat-content">                  <div class="ctext-wrap">                      <div class="ctext-wrap-content">                          <div class="p-3 border-primary border rounded-3">                              <div class="d-flex align-items-center attached-file">                                  <div class="flex-shrink-0 avatar-sm me-3 ms-0 attached-file-avatar">                                      <div class="avatar-title bg-soft-primary text-primary rounded-circle font-size-20"><i class="bx bx-headphone"></i></div>                                  </div>                                  <div class="flex-grow-1 overflow-hidden">                                      <div class="text-start">                                          <h5 class="font-size-14 mb-1">' +
                  t +
                  '</h5>                                          <p class="text-muted text-truncate font-size-13 mb-0">' +
                  a +
                  'mb</p>                                  </div>                                  </div>                                  <div class="flex-shrink-0 ms-4">                                      <div class="d-flex gap-2 font-size-20 d-flex align-items-start">                                          <div>                                          <a href="#" class="text-muted download-file" data-id="' +
                  E +
                  '" > <i class="bx bxs-download"></i> </a>                                          </div>                                      </div>                                  </div>                              </div>                          </div>                      </div>                      <div class="dropdown align-self-start message-box-drop">                          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="ri-more-2-fill"></i> </a>                          <div class="dropdown-menu">                          <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>                          <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>                          <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-' +
                  w +
                  '">Copy <i class="bx bx-copy text-muted ms-2"></i></a>                          <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>                          <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Mark as Unread <i class="bx bx-message-error text-muted ms-2"></i></a>                           <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-' +
                  w +
                  '" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>                      </div>                      </div>                      </div>                      <div class="conversation-name">                          <small class="text-muted time">' +
                  h() +
                  '</small>                            <span class="text-success check-message-icon"><i class="bx bx-check"></i></span>                          </div>                        </div>                      </div>                    </li>'
              );
            var i = document.getElementById("chat-list-" + w);
            i.querySelectorAll(".delete-item").forEach(function (e) {
              e.addEventListener("click", function () {
                y.removeChild(i);
              });
            }),
              document.querySelectorAll(".download-file").forEach(function (i) {
                i.addEventListener("click", function (e) {
                  e.preventDefault();
                  var t,
                    a,
                    s = i.getAttribute("data-id");
                  window.File &&
                  window.FileReader &&
                  window.FileList &&
                  window.Blob
                    ? ((t = new Blob([L[s]], { type: "application/mp3" })),
                      ((a = document.createElement("a")).href =
                        window.URL.createObjectURL(t)),
                      (a.download = S[s].name),
                      a.click())
                    : alert(
                        "The File APIs are not fully supported in this browser."
                      );
                });
              }),
              document.querySelector(".file_Upload ").classList.remove("show");
          })(i, n)
        : 1 == d
        ? ((function (e, t) {
            var a = document.querySelector(".user-profile-show").innerHTML,
              s = document.querySelector(
                ".replyCard .replymessage-block .flex-grow-1 .mb-0"
              ).innerText;
            w++;
            var i = document
              .getElementById(e)
              .querySelector(".chat-conversation-list");
            null != t &&
              (i.insertAdjacentHTML(
                "beforeend",
                '<li class="chat-list right" id="chat-list-' +
                  w +
                  '" >                <div class="conversation-list">                    <div class="user-chat-content">                        <div class="ctext-wrap">                            <div class="ctext-wrap-content">                            <div class="replymessage-block mb-0 d-flex align-items-start">                        <div class="flex-grow-1">                            <h5 class="conversation-name">' +
                  a +
                  '</h5>                            <p class="mb-0">' +
                  s +
                  '</p>                        </div>                        <div class="flex-shrink-0">                            <button type="button" class="btn btn-sm btn-link mt-n2 me-n3 font-size-18">                            </button>                        </div>                    </div>                                <p class="mb-0 ctext-content mt-1">                                    ' +
                  t +
                  '                                </p>                            </div>                            <div class="dropdown align-self-start message-box-drop">                                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                    <i class="ri-more-2-fill"></i>                                </a>                                <div class="dropdown-menu">                                    <a class="dropdown-item d-flex align-items-center justify-content-between reply-message" href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-' +
                  w +
                  '">Copy <i class="bx bx-copy text-muted ms-2"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Mark as Unread <i class="bx bx-message-error text-muted ms-2"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-' +
                  w +
                  '" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>                            </div>                        </div>                    </div>                    <div class="conversation-name">                        <small class="text-muted time">' +
                  h() +
                  '</small>                        <span class="text-success check-message-icon"><i class="bx bx-check"></i></span>                    </div>                </div>            </div>        </li>'
              ),
              0);
            var l = document.getElementById("chat-list-" + w);
            l.querySelectorAll(".delete-item").forEach(function (e) {
              e.addEventListener("click", function () {
                y.removeChild(l);
              });
            }),
              l.querySelectorAll(".copy-message").forEach(function (e) {
                e.addEventListener("click", function () {
                  (document.getElementById("copyClipBoard").style.display =
                    "block"),
                    (document.getElementById(
                      "copyClipBoardChannel"
                    ).style.display = "block"),
                    setTimeout(function () {
                      (document.getElementById("copyClipBoard").style.display =
                        "none"),
                        (document.getElementById(
                          "copyClipBoardChannel"
                        ).style.display = "none");
                    }, 1e3);
                });
              }),
              l.querySelectorAll(".reply-message").forEach(function (s) {
                s.addEventListener("click", function () {
                  var e =
                      s.closest(".ctext-wrap").children[0].children[0]
                        .innerText,
                    t = document.querySelector(".user-profile-show").innerHTML;
                  document.querySelector(
                    ".replyCard .replymessage-block .flex-grow-1 .mb-0"
                  ).innerText = e;
                  var a =
                    !s.closest(".chat-list") ||
                    s.closest(".chat-list").classList.contains("left")
                      ? t
                      : "You";
                  document.querySelector(
                    ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
                  ).innerText = a;
                });
              }),
              l.querySelectorAll(".copy-message").forEach(function (e) {
                e.addEventListener("click", function () {
                  l.childNodes[1].children[1].firstElementChild.firstElementChild.getAttribute(
                    "id"
                  ),
                    (isText =
                      l.childNodes[1].children[1].firstElementChild
                        .firstElementChild.innerText),
                    navigator.clipboard.writeText(isText);
                });
              });
          })(l, n),
          (d = !1))
        : (function (e, t) {
            w++;
            var a = document
              .getElementById(e)
              .querySelector(".chat-conversation-list");
            null != t &&
              a.insertAdjacentHTML(
                "beforeend",
                '<li class="chat-list right" id="chat-list-' +
                  w +
                  '" >                <div class="conversation-list">                    <div class="user-chat-content">                        <div class="ctext-wrap">                            <div class="ctext-wrap-content">                                <p class="mb-0 ctext-content">' +
                  t +
                  '</p>                            </div>                            <div class="dropdown align-self-start message-box-drop">                                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                    <i class="ri-more-2-fill"></i>                                </a>                                <div class="dropdown-menu">                                    <a class="dropdown-item d-flex align-items-center justify-content-between reply-message" href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-' +
                  w +
                  '">Copy <i class="bx bx-copy text-muted ms-2"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Mark as Unread <i class="bx bx-message-error text-muted ms-2"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-' +
                  w +
                  '" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>                            </div>                        </div>                    </div>                    <div class="conversation-name">                        <small class="text-muted time">' +
                  h() +
                  '</small>                        <span class="text-success check-message-icon"><i class="bx bx-check"></i></span>                    </div>                </div>            </div>        </li>'
              );
            var s = document.getElementById("chat-list-" + w);
            s.querySelectorAll(".delete-item").forEach(function (e) {
              e.addEventListener("click", function () {
                a.removeChild(s);
              });
            }),
              s.querySelectorAll(".copy-message").forEach(function (e) {
                e.addEventListener("click", function () {
                  (document.getElementById("copyClipBoard").style.display =
                    "block"),
                    (document.getElementById(
                      "copyClipBoardChannel"
                    ).style.display = "block"),
                    setTimeout(function () {
                      (document.getElementById("copyClipBoard").style.display =
                        "none"),
                        (document.getElementById(
                          "copyClipBoardChannel"
                        ).style.display = "none");
                    }, 1e3);
                });
              }),
              s.querySelectorAll(".reply-message").forEach(function (i) {
                i.addEventListener("click", function () {
                  var e = document.querySelector(".replyCard"),
                    t = document.querySelector("#close_toggle"),
                    a =
                      i.closest(".ctext-wrap").children[0].children[0]
                        .innerText,
                    s = document.querySelector(".user-profile-show").innerHTML;
                  (d = !0),
                    e.classList.add("show"),
                    t.addEventListener("click", function () {
                      e.classList.remove("show");
                    }),
                    (document.querySelector(
                      ".replyCard .replymessage-block .flex-grow-1 .mb-0"
                    ).innerText = a),
                    (document.querySelector(
                      ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
                    ).innerText = s);
                });
              }),
              s.querySelectorAll(".copy-message").forEach(function (e) {
                e.addEventListener("click", function () {
                  var e =
                    s.childNodes[1].firstElementChild.firstElementChild
                      .firstElementChild.firstElementChild.innerText;
                  navigator.clipboard.writeText(e);
                });
              });
          })(t, n),
        p(t || a || s || i || l),
        (g.value = ""),
        document.querySelector(".image_pre") &&
          document.querySelector(".image_pre").remove(),
        (document.getElementById("galleryfile-input").value = ""),
        document.querySelector(".attchedfile_pre") &&
          document.querySelector(".attchedfile_pre").remove(),
        (document.getElementById("attachedfile-input").value = ""),
        document.querySelector(".audiofile_pre") &&
          document.querySelector(".audiofile_pre").remove(),
        (document.getElementById("audiofile-input").value = ""),
        document.getElementById("close_toggle").click();
    });
  var B = document.querySelector("#channel-conversation");
  document
    .querySelector("#profile-foreground-img-file-input")
    .addEventListener("change", function () {
      id;
      var e = document.querySelector(".profile-foreground-img"),
        t = document.querySelector(".profile-foreground-img-file-input")
          .files[0],
        a = new FileReader();
      a.addEventListener(
        "load",
        function () {
          e.src = a.result;
        },
        !1
      ),
        t && a.readAsDataURL(t);
    }),
    document
      .querySelector("#profile-img-file-input")
      .addEventListener("change", function () {
        var e = document.querySelector(".user-profile-image"),
          t = document.querySelector(".profile-img-file-input").files[0],
          a = new FileReader();
        a.addEventListener(
          "load",
          function () {
            e.src = a.result;
          },
          !1
        ),
          t && a.readAsDataURL(t);
      });
  for (
    var j = document.getElementsByClassName("favourite-btn"), T = 0;
    T < j.length;
    T++
  ) {
    var I = j[T];
    I.onclick = function () {
      I.classList.toggle("active");
    };
  }
  new FgEmojiPicker({
    trigger: [".emoji-btn"],
    removeOnSelection: !1,
    closeButton: !0,
    position: ["top", "right"],
    preFetch: !0,
    dir: "js/dir/json",
    insertInto: document.querySelector(".chat-input"),
  });
  function H(e, t, a, s, i) {
    var l = '<div class="ctext-wrap">';
    if (null != t)
      l +=
        '<div class="ctext-wrap-content" id=' +
        e +
        '>        <p class="mb-0 ctext-content">' +
        t +
        "</p></div>";
    else if (a && 0 < a.length) {
      for (l += '<div class="message-img mb-0">', T = 0; T < a.length; T++)
        l +=
          '<div class="message-img-list">            <div>              <a class="popup-img d-inline-block" href="' +
          a[T] +
          '">                <img src="' +
          a[T] +
          '" alt="" class="rounded border">              </a>            </div>            <div class="message-img-link">              <ul class="list-inline mb-0">                <li class="list-inline-item dropdown">                  <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                      <i class="bx bx-dots-horizontal-rounded"></i>                  </a>                <div class="dropdown-menu">                  <a class="dropdown-item d-flex align-items-center justify-content-between" href="' +
          a[T] +
          '" download>Download <i class="bx bx-download ms-2 text-muted"></i></a>                  <a class="dropdown-item d-flex align-items-center justify-content-between"  href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>                  <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>                  <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>                  <a class="dropdown-item d-flex align-items-center justify-content-between delete-image" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>                </div>              </li>          </ul>        </div>      </div>';
      l += "</div>";
    } else
      0 < s.length &&
        (l +=
          '<div class="ctext-wrap-content">            <div class="p-3 border-primary border rounded-3">            <div class="d-flex align-items-center attached-file">                <div class="flex-shrink-0 avatar-sm me-3 ms-0 attached-file-avatar">                    <div class="avatar-title bg-soft-primary text-primary rounded-circle font-size-20">                        <i class="ri-attachment-2"></i>                    </div>                </div>                <div class="flex-grow-1 overflow-hidden">                    <div class="text-start">                        <h5 class="font-size-14 mb-1">design-phase-1-approved.pdf</h5>                        <p class="text-muted text-truncate font-size-13 mb-0">12.5 MB</p>                    </div>                </div>                <div class="flex-shrink-0 ms-4">                    <div class="d-flex gap-2 font-size-20 d-flex align-items-start">                        <div>                            <a href="#" class="text-muted">                                <i class="bx bxs-download"></i>                            </a>                        </div>                    </div>                </div>             </div>            </div>            </div>            <div class="dropdown align-self-start message-box-drop">                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                    <i class="ri-more-2-fill"></i>                </a>                <div class="dropdown-menu">                  <a class="dropdown-item d-flex align-items-center justify-content-between"  href="' +
          s +
          '" download>Download <i class="bx bx-download ms-2 text-muted"></i></a>                  <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>                  <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>                  <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>                  <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>                </div>            </div>');
    return (
      !0 === i &&
        (l +=
          '<div class="dropdown align-self-start message-box-drop">                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                    <i class="ri-more-2-fill"></i>                </a>                <div class="dropdown-menu">                    <a class="dropdown-item d-flex align-items-center justify-content-between reply-message" href="#" id="reply-message-' +
          w +
          '" data-bs-toggle="collapse" data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>                    <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-' +
          w +
          '">Copy <i class="bx bx-copy text-muted ms-2"></i></a>                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Mark as Unread <i class="bx bx-message-error text-muted ms-2"></i></a>                    <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>                </div>            </div>'),
      (l += "</div>")
    );
  }
  function _(e) {
    var t, a, s;
    (t = e),
      (a = function (e, t) {
        var l, n, a, i, o, s, r, c;
        null !== e
          ? console.log("Something went wrong: " + e)
          : ((l = "users" == m ? t[0].chats : t[0].channel_chat),
            (document.getElementById(m + "-conversation").innerHTML = ""),
            (n = 0),
            l.forEach(function (t, e) {
              var a, s, i;
              0 < n
                ? --n
                : ((a = t.from_id == v ? " right" : " left"),
                  (s = f.find(function (e) {
                    return e.id == t.from_id;
                  })),
                  (i =
                    '<li class="chat-list' +
                    a +
                    '" id=' +
                    t.id +
                    '>                        <div class="conversation-list">'),
                  v != t.from_id &&
                    (i +=
                      '<div class="chat-avatar"><img src="' +
                      s.profile +
                      '" alt=""></div>'),
                  (i += '<div class="user-chat-content">'),
                  (i += H(
                    t.id,
                    t.msg,
                    t.has_images,
                    t.has_files,
                    t.has_dropDown
                  )),
                  l[e + 1] &&
                    t.from_id == l[e + 1].from_id &&
                    ((n = (function (e, t, a) {
                      for (
                        var s = 0;
                        e[t] && e[t + 1] && e[t + 1].from_id == a;

                      )
                        s++, t++;
                      return s;
                    })(l, e, t.from_id)),
                    (i += (function (e, t, a) {
                      for (
                        var s = 0;
                        e[t] && e[t + 1] && e[t + 1].from_id == a;

                      )
                        (s = H(
                          e[t + 1].id,
                          e[t + 1].msg,
                          e[t + 1].has_images,
                          e[t + 1].has_files,
                          e[t + 1].has_dropDown
                        )),
                          t++;
                      return s;
                    })(l, e, t.from_id))),
                  (i +=
                    '<div class="conversation-name"><small class="text-muted time">' +
                    t.datetime +
                    '</small> <span class="text-success check-message-icon"><i class="bx bx-check-double"></i></span></div>'),
                  (i += "</div>                </div>            </li>"),
                  (document.getElementById(m + "-conversation").innerHTML +=
                    i));
            })),
          y.querySelectorAll(".delete-item").forEach(function (e) {
            e.addEventListener("click", function () {
              2 == e.closest(".user-chat-content").childElementCount
                ? e.closest(".chat-list").remove()
                : e.closest(".ctext-wrap").remove();
            });
          }),
          B.querySelectorAll(".delete-item").forEach(function (e) {
            e.addEventListener("click", function () {
              2 == e.closest(".user-chat-content").childElementCount
                ? e.closest(".chat-list").remove()
                : e.closest(".ctext-wrap").remove();
            });
          }),
          y.querySelectorAll(".chat-list").forEach(function (e) {
            e.querySelectorAll(".delete-image").forEach(function (e) {
              e.addEventListener("click", function () {
                1 == e.closest(".message-img").childElementCount
                  ? e.closest(".chat-list").remove()
                  : e.closest(".message-img-list").remove();
              });
            });
          }),
          y.querySelectorAll(".copy-message").forEach(function (t) {
            t.addEventListener("click", function () {
              var e = t.closest(".ctext-wrap").children[0]
                ? t.closest(".ctext-wrap").children[0].children[0].innerText
                : "";
              navigator.clipboard.writeText(e);
            });
          }),
          B.querySelectorAll(".copy-message").forEach(function (t) {
            t.addEventListener("click", function () {
              var e = t.closest(".ctext-wrap").children[0]
                ? t.closest(".ctext-wrap").children[0].children[0].innerText
                : "";
              navigator.clipboard.writeText(e);
            });
          }),
          p("users-chat"),
          F(),
          document.querySelectorAll(".copy-message").forEach(function (e) {
            e.addEventListener("click", function () {
              (document.getElementById("copyClipBoard").style.display =
                "block"),
                (document.getElementById("copyClipBoardChannel").style.display =
                  "block"),
                setTimeout(function () {
                  (document.getElementById("copyClipBoard").style.display =
                    "none"),
                    (document.getElementById(
                      "copyClipBoardChannel"
                    ).style.display = "none");
                }, 1e3);
            });
          }),
          (a = y.querySelectorAll(".reply-message")),
          (i = document.querySelector(".replyCard")),
          (o = document.querySelector("#close_toggle")),
          a.forEach(function (s) {
            s.addEventListener("click", function () {
              (d = !0),
                i.classList.add("show"),
                o.addEventListener("click", function () {
                  i.classList.remove("show");
                });
              var e =
                s.closest(".ctext-wrap").children[0].children[0].innerText;
              document.querySelector(
                ".replyCard .replymessage-block .flex-grow-1 .mb-0"
              ).innerText = e;
              var t = document.querySelector(".user-profile-show").innerHTML,
                a =
                  !subitem.closest(".chat-list") ||
                  subitem.closest(".chat-list").classList.contains("left")
                    ? t
                    : "You";
              document.querySelector(
                ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
              ).innerText = a;
            });
          }),
          (s = B.querySelectorAll(".reply-message")),
          (r = document.querySelector(".replyCard")),
          (c = document.querySelector("#close_toggle")),
          s.forEach(function (a) {
            a.addEventListener("click", function () {
              (d = !0),
                r.classList.add("show"),
                c.addEventListener("click", function () {
                  r.classList.remove("show");
                });
              var e =
                a.closest(".ctext-wrap").children[0].children[0].innerText;
              document.querySelector(
                ".replyCard .replymessage-block .flex-grow-1 .mb-0"
              ).innerText = e;
              var t = document.querySelector(".user-profile-show").innerHTML;
              document.querySelector(
                ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
              ).innerText = t;
            });
          });
      }),
      (s = new XMLHttpRequest()).open("GET", t, !0),
      (s.responseType = "json"),
      (s.onload = function () {
        var e = s.status;
        a(200 === e ? null : e, s.response);
      }),
      s.send();
  }
  function F() {
    GLightbox({ selector: ".popup-img", title: !1 });
  }
  document.getElementById("emoji-btn").addEventListener("click", function () {
    setTimeout(function () {
      var e,
        t = document.getElementsByClassName("fg-emoji-picker")[0];
      !t ||
        ((e = window.getComputedStyle(t)
          ? window.getComputedStyle(t).getPropertyValue("left")
          : "") &&
          ((e = (e = e.replace("px", "")) - 40 + "px"), (t.style.left = e)));
    }, 0);
  });
})();
var primaryColor = window
  .getComputedStyle(document.body, null)
  .getPropertyValue("--bs-primary-rgb");
function removeImage(e) {
  document.querySelector("#" + e).remove(),
    0 == document.querySelectorAll(".image-remove").length &&
      document.querySelector(".file_Upload").classList.remove("show");
}
function removeAttachedFile() {
  document.getElementById("remove-attechedFile") &&
    (document.getElementsByClassName("attechedFile-remove")[0],
    document
      .getElementById("remove-attechedFile")
      .addEventListener("click", function (e) {
        e.target.closest(".attchedfile_pre").remove();
      })),
    document
      .querySelector("#remove-attechedFile")
      .addEventListener("click", function () {
        document.querySelector(".file_Upload ").classList.remove("show");
      });
}
function removeAudioFile() {
  document.getElementById("remove-audioFile") &&
    (document.getElementsByClassName("audioFile-remove")[0],
    document
      .getElementById("remove-audioFile")
      .addEventListener("click", function (e) {
        e.target.closest(".audiofile_pre").remove();
      })),
    document
      .querySelector("#remove-audioFile")
      .addEventListener("click", function () {
        document.querySelector(".file_Upload ").classList.remove("show");
      });
}
themeColor(primaryColor);
