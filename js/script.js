(function () {
    "use strict";
    var t = {
            1041: function (t, n, i) {
                i(6992), i(8674), i(9601), i(7727);
                var e = i(5393),
                    l = {
                        id: "app"
                    };

                function c(t, n, i, c, a, s) {
                    var o = (0, e.up)("NavBar"),
                        r = (0, e.up)("RouterView");
                    return (0, e.wg)(), (0, e.j4)("div", l, [(0, e.Wm)(o), (0, e.Wm)(r)])
                }
                var a = i.p + "images/logo.png",
                    s = i.p + "images/logo.png",
                    o = {
                        ref: "dummy",
                        class: "nav-dummy"
                    },
                    r = {
                        class: "lg:max-w-screen-md xl:max-w-screen-lg w-full h-16 flex justify-between items-center flex-wrap py-2"
                    },
                    h = {
                        key: 0,
                        src: a,
                        alt: "",
                        class: "h-7"
                    },
                    m = {
                        key: 1,
                        src: s,
                        alt: "",
                        class: "h-7"
                    },
                    g = {
                        class: "block md:hidden px-4"
                    },
                    u = (0, e.Wm)("svg", {
                        class: "text-yellow-600 fill-current h-3 w-3",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, [(0, e.Wm)("path", {
                        d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                    })], -1),
                    p = (0, e.Uk)(" FAQ "),
                    v = (0, e.Wm)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }, [(0, e.Wm)("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M8 7l4-4m0 0l4 4m-4-4v18"
                    })], -1);

                function d(t, n, i, l, c, a) {
                    var s = (0, e.up)("router-link");
                    return (0, e.wg)(), (0, e.j4)(e.HY, null, [(0, e.Wm)("div", o, null, 512), (0, e.Wm)("div", {
                        ref: "navbar",
                        class: ["fixed z-20 nav flex flex-col items-center justify-center w-full transition-all", {
                            "py-4": l.isTop && !c.showMenu,
                            "nav-scroll py-0": !l.isTop || c.showMenu
                        }]
                    }, [(0, e.Wm)("div", r, [(0, e.Wm)("div", null, [(0, e.Wm)(s, {
                        to: "/",
                        class: "block px-4 py-2",
                        onClick: n[1] || (n[1] = (0, e.iM)((function (t) {
                            return l.scrollToSection("main-section")
                        }), ["prevent"]))
                    }, {
                        default: (0, e.w5)((function () {
                            return [l.isTop && !c.showMenu ? ((0, e.wg)(), (0, e.j4)("img", h)) : ((0, e.wg)(), (0, e.j4)("img", m))]
                        })),
                        _: 1
                    })]), (0, e.Wm)("div", g, [(0, e.Wm)("button", {
                        class: "btn-menu flex items-center border border-yellow-600 rounded p-3",
                        onClick: n[2] || (n[2] = function (t) {
                            return c.showMenu = !c.showMenu
                        })
                    }, [u])]), (0, e.Wm)("div", {
                        class: ["w-full md:flex md:items-center md:w-auto md:flex-grow justify-end mt-2 md:mt-0", {
                            hidden: !c.showMenu,
                            "bg-white": c.showMenu
                        }]
                    }, [((0, e.wg)(!0), (0, e.j4)(e.HY, null, (0, e.Ko)(c.menuItems, (function (t, n) {
                        return (0, e.wg)(), (0, e.j4)(s, {
                            key: n,
                            to: "/#".concat(t.code),
                            class: ["nav-link text-center", {
                                "text-yellow-200 hover:text-yellow-400": l.isTop && !c.showMenu,
                                "text-black hover:text-yellow-800": !l.isTop || c.showMenu
                            }],
                            onClick: (0, e.iM)((function (n) {
                                return l.scrollToSection(t.code)
                            }), ["prevent"])
                        }, {
                            default: (0, e.w5)((function () {
                                return [(0, e.Uk)((0, e.zw)(t.title), 1)]
                            })),
                            _: 2
                        }, 1032, ["to", "class", "onClick"])
                    })), 128)), (0, e.Wm)(s, {
                        to: "/faq",
                        class: ["nav-link text-center", {
                            "text-yellow-200 hover:text-yellow-400": l.isTop && !c.showMenu,
                            "text-black hover:text-yellow-800": !l.isTop || c.showMenu
                        }]
                    }, {
                        default: (0, e.w5)((function () {
                            return [p]
                        })),
                        _: 1
                    }, 8, ["class"])], 2)]), (0, e.wy)((0, e.Wm)("a", {
                        id: "to-top",
                        title: "Về đầu trang",
                        href: "javascript:void(0)",
                        class: [{
                            visible: !l.isTop.value
                        }, "transition transition-duration-200 ease-in-out fixed rounded-full w-10 h-10 leading-10 text center bg-red-400 text-black shadow-xl z-50 fill-current p-2 opacity-100 hover:opacity-80"],
                        onClick: n[3] || (n[3] = function (t) {
                            return l.scrollToTop()
                        })
                    }, [v], 2), [
                        [e.F8, !l.isTop]
                    ])], 2)], 64)
                }
                i(8309);
                var b = i(2119),
                    f = [{
                        title: "Giới thiệu",
                        code: "intro-section",
                        url: "/#intro-section"
                    }, {
                        title: "Thể lệ",
                        code: "rules-section",
                        url: "/#rules-section"
                    }, {
                        title: "Giải thưởng",
                        code: "rewards-section",
                        url: "/#rewards-section"
                    }],
                    w = {
                        data: function () {
                            return {
                                menuItems: f,
                                showMenu: !1
                            }
                        },
                        setup: function () {
                            var t = (0, b.tv)(),
                                n = (0, b.yj)(),
                                i = (0, e.iH)(null),
                                l = (0, e.iH)(!0),
                                c = function (i) {
                                    "Home" === n.name ? document.getElementById(i).scrollIntoView({
                                        behavior: "smooth"
                                    }) : (t.push("/"), setTimeout((function () {
                                        document.getElementById(i).scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    }), 100))
                                },
                                a = function () {
                                    document.getElementById("app").scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                        inline: "nearest"
                                    })
                                };
                            return (0, e.bv)((function () {
                                var t = new IntersectionObserver((function (t) {
                                    var n = t[0];
                                    n.isIntersecting ? l.value = !0 : l.value = !1
                                }));
                                t.observe(i.value)
                            })), {
                                dummy: i,
                                isTop: l,
                                scrollToSection: c,
                                scrollToTop: a
                            }
                        }
                    };
                w.render = d;
                var y = w,
                    x = {
                        components: {
                            NavBar: y
                        }
                    };
                x.render = c;
                var k = x,
                    W = {
                        class: "bg-grid"
                    };

                function T(t, n, i, l, c, a) {
                    var s = (0, e.up)("MainSection"),
                        o = (0, e.up)("IntroSection"),
                        r = (0, e.up)("RulesSection"),
                        h = (0, e.up)("RewardsSection"),
                        m = (0, e.up)("FooterSection");
                    return (0, e.wg)(), (0, e.j4)(e.HY, null, [(0, e.Wm)(s, {
                        class: "scrollspy"
                    }), (0, e.Wm)(o, {
                        class: "scrollspy"
                    }), (0, e.Wm)(r, {
                        class: "scrollspy"
                    }), (0, e.Wm)("div", W, [(0, e.Wm)(h, {
                        class: "scrollspy"
                    }), (0, e.Wm)(m)])], 64)
                }
                var _ = i.p + "images/vui-tet.png",
                    V = i.p + "images/2021.png",
                    j = i.p + "images/flowers.png",
                    q = i.p + "images/buffalo.png",
                    C = {
                        id: "main-section",
                        class: "h-screen bg-main grid place-items-center"
                    },
                    B = {
                        class: "max-w-screen-lg w-full relative flex"
                    },
                    M = {
                        class: "absolute flex-1 flex flex-col justify-center items-center mr-3 relative"
                    },
                    I = (0, e.Wm)("img", {
                        src: _,
                        alt: "",
                        class: "z-10"
                    }, null, -1),
                    K = (0, e.Wm)("img", {
                        src: V,
                        alt: "2021",
                        class: "blend z-10"
                    }, null, -1),
                    S = (0, e.Wm)("p", {
                        class: "text-gray-300 leading-loose text-xl"
                    }, " 05/01/2021 - 25/01/2021 ", -1),
                    U = {
                        class: "mt-2 md:mt-5 w-full flex justify-center z-10"
                    },
                    H = (0, e.Wm)("a", {
                        class: "btn btn-primary btn-grad",
                        href: "https://",
                        target: "_blank"
                    }, "Tham gia ngay", -1),
                    N = (0, e.Wm)("img", {
                        class: "absolute flowers w-full opacity-40",
                        src: j,
                        alt: ""
                    }, null, -1),
                    F = (0, e.Wm)("div", {
                        class: "flex-1 absolute lg:static opacity-20 lg:opacity-100"
                    }, [(0, e.Wm)("img", {
                        src: q,
                        class: "flex-1 buffalo",
                        alt: ""
                    })], -1);

                function Y(t, n, i, l, c, a) {
                    return (0, e.wg)(), (0, e.j4)("div", C, [(0, e.Wm)("div", B, [(0, e.Wm)("div", M, [I, K, S, (0, e.Wm)("div", U, [(0, e.Wm)("button", {
                        class: "btn",
                        ref: "learnMoreButton",
                        onClick: n[1] || (n[1] = function () {
                            return l.scrollLearnMore && l.scrollLearnMore.apply(l, arguments)
                        })
                    }, "Tìm hiểu thêm", 512), H]), N]), F])])
                }
                var P = {
                    setup: function () {
                        var t = (0, e.iH)(null),
                            n = function () {
                                document.getElementById("intro-section").scrollIntoView({
                                    behavior: "smooth"
                                })
                            };
                        return {
                            learnMoreButton: t,
                            scrollLearnMore: n
                        }
                    }
                };
                P.render = Y;
                var z = P,
                    R = {
                        id: "intro-section",
                        class: "min-h-screen py-16 md:py-24 flex items-center justify-center"
                    },
                    L = (0, e.uE)('<div class="max-w-screen-lg w-full relative h-full flex flex-col justify-center px-4"><h3 class="section-title text-yellow-900"> Giới thiệu </h3><div class="text-yellow-900 leading-loose tracking-wider text-base sm:text-lg text-justify"><p class="mb-8"> Một năm mới lại đến, nhóm SVCG hạt Lạc Đạo - Liễu Đề - Quỹ Nhất xin gửi lời chúc sức khỏe, bình an và thịnh vượng tới mọi người trong <a href="https://fb.com/SVCGHAT" class="underline" target="_blank" rel="noopener"><strong>SVCG hạt Lạc Đạo - Liễu Đề - Quỹ Nhất</strong></a> nói riêng và toàn thể cộng đồng Việt nhân dịp xuân Tân Sửu 2021. Cảm ơn các bạn đã luôn ủng hộ, đồng hành cùng chúng mình. </p><p class="col-start-2 row-start-2"> Hướng tới <strong>Lễ Quan Thầy Lần Thứ X</strong> khai xuân một năm mới đầy sôi nổi, hào hứng, BTC hân hạnh giới thiệu cuộc thi ảnh: <strong class="title-event">10 NĂM 1 HÀNH TRÌNH</strong>, sẽ mang đến cơ hội nhận những phần quà độc đáo và ý nghĩa với tất cả mọi người. Hãy cùng khám phá ngay nhé! </p></div></div>', 1);

                function O(t, n) {
                    return (0, e.wg)(), (0, e.j4)("div", R, [L])
                }
                const E = {};
                E.render = O;
                var A = E,
                    G = i.p + "img/image-rules-2.d459e797.png",
                    D = {
                        id: "rules-section",
                        class: "py-16 md:py-24"
                    },
                    Q = (0, e.Wm)("div", {
                        class: "path"
                    }, null, -1),
                    X = (0, e.Wm)("div", {
                        class: "m-auto max-w-screen-lg px-4"
                    }, [(0, e.Wm)("h3", {
                        class: "section-title text-red-800"
                    }, " Thể lệ "), (0, e.Wm)("div", {
                        class: "rules-content flex flex-wrap text-justify"
                    }, [(0, e.Wm)("div", {
                        class: "w-full sm:w-2/5 pr-12 hidden lg:block"
                    }, [(0, e.Wm)("img", {
                        src: G,
                        class: "w-auto m-auto",
                        alt: ""
                    })]), (0, e.Wm)("div", {
                        class: "w-full lg:w-3/5 sm:text-lg"
                    }, [(0, e.Wm)("p", {
                        class: "py-2"
                    }, [(0, e.Wm)("strong", {
                        class: "text-lg uppercase text-red-400"
                    }, "10 NĂM 1 HÀNH TRÌNH"), (0, e.Uk)(" là cuộc thi được tổ chức trên "), (0, e.Wm)("a", {
                        href: "https://svcglacdaolieudequynhat.tk",
                        target: "_blank"
                    }, "website https://svcglacdaolieudequynhat.tk"), (0, e.Uk)(" của nhóm SVCG hạt Lạc Đạo - Liễu Đề - Quỹ Nhất được sáng tạo bởi "), (0, e.Wm)("a", {
                        href: "https://fb.com/",
                        target: "_blank"
                    }, "Jos Hoàng Tiên"), (0, e.Uk)(". ")]), (0, e.Wm)("p", {
                        class: "py-2"
                    }, [(0, e.Wm)("strong", null, "Đối tượng tham gia:"), (0, e.Uk)(" Tất cả mọi người.")]), (0, e.Wm)("p", {
                        class: "py-2"
                    }, [(0, e.Wm)("strong", null, "Cách thức tham gia:"), (0, e.Uk)(" Bạn chỉ cần đăng tải một hoặc nhiều bài viết với chủ đề tự chọn (Ví dụ: chia sẻ kiến thức, kinh nghiệm cá nhân...) liên quan tới lĩnh vực IT trên website viblo.asia với chế độ công khai. Với mỗi bài viết, bạn sẽ ghi cho mình một số điểm được gọi là Điểm tương tác, được tính toán dựa trên các chỉ số: lượt xem, điểm vote, lượt comments, lượt votes theo công thức: ")]), (0, e.Wm)("p", {
                        class: "py-2"
                    }, [(0, e.Wm)("strong", null, "Điểm tương tác"), (0, e.Uk)(" = lượt thích + lượt reaction * 1 & lượt share * 2 ")])]), (0, e.Wm)("div", {
                        class: "rules py-2 text-left m-auto lg:text-black relative lg:mt-12"
                    }, [(0, e.Wm)("div", {
                        class: "lg:absolute rule-title font-bold"
                    }, [(0, e.Uk)("Bài viết hợp lệ để tính điểm "), (0, e.Wm)("span", {
                        class: "lg:hidden"
                    }, "khi: ")]), (0, e.Wm)("div", {
                        class: "lg:absolute rule-1 lg:text-green-900"
                    }, [(0, e.Wm)("span", {
                        class: "lg:hidden"
                    }, "-"), (0, e.Uk)(" Được đăng từ 05.01.2021 đến 25.01.2021, chưa từng được đăng trên nền tảng nào trước đó")]), (0, e.Wm)("div", {
                        class: "lg:absolute rule-2 lg:text-red-100"
                    }, [(0, e.Wm)("span", {
                        class: "lg:hidden"
                    }, "-"), (0, e.Uk)(" Được đăng bởi người tham gia cuộc thi, không sao chép nội dung, hình ảnh của tác giả khác")]), (0, e.Wm)("div", {
                        class: "lg:absolute rule-3 lg:text-purple-100"
                    }, [(0, e.Wm)("span", {
                        class: "lg:hidden"
                    }, "-"), (0, e.Uk)(" Không vi phạm các quy định chung của nhóm và không bị đánh dấu là bài spam trên hệ thống")]), (0, e.Wm)("div", {
                        class: "lg:absolute rule-4 lg:text-yellow-900"
                    }, [(0, e.Wm)("span", {
                        class: "lg:hidden"
                    }, "-"), (0, e.Uk)(" Có gắn theo tag "), (0, e.Wm)("strong", null, "#10nam1hanhtrinh"), (0, e.Uk)(" trên bài thi")])]), (0, e.Wm)("p", {
                        class: "mt-8"
                    }, "Nếu bài viết có dấu hiện gian lận để tăng tương tác ảo, BTC có quyền loại người dùng đó khỏi sự kiện. Trong mọi trường hợp, quyết định của BTC là quyết định cuối cùng.")])], -1);

                function Z(t, n) {
                    return (0, e.wg)(), (0, e.j4)("div", D, [Q, X])
                }
                const J = {};
                J.render = Z;
                var $ = J,
                    tt = i.p + "images/rewards.svg",
                    nt = {
                        id: "rewards-section",
                        class: "min-h-screen py-16 md:py-24 flex items-center justify-center"
                    },
                    it = {
                        class: "max-w-screen-lg w-full relative h-full text-justify px-4"
                    },
                    et = (0, e.Wm)("h3", {
                        class: "section-title text-red-300"
                    }, " Giải thưởng ", -1),
                    lt = {
                        class: "flex flex-col"
                    },
                    ct = {
                        class: "text-red-200 mb-8 lg:mr-8"
                    },
                    at = (0, e.Wm)("div", {
                        class: "flex flex-col lg:flex-row justify-center items-center mb-8"
                    }, [(0, e.Wm)("div", {
                        class: "mb-4 lg:mr-4 leading-loose tracking-wider text-lg"
                    }, [(0, e.Wm)("img", {
                        class: "max-w-md max-h-48 lg:max-h-full md:float-right md:ml-3 md:mb-3",
                        src: tt,
                        alt: "Giải thưởng"
                    }), (0, e.Wm)("p", {
                        class: "mb-4"
                    }, " Kết thúc cuộc thi, BTC sẽ trao quà cho người đạt giải. Danh sách người đạt giải sẽ được công bố chính thức trên Fanpage của Confessions Lạc Đạo - Liễu Đề - Quỹ Nhất "), (0, e.Wm)("p", {
                        class: "mb-4"
                    }, [(0, e.Uk)(" Số lượng giải thưởng được trao bao gồm "), (0, e.Wm)("strong", null, "05 giải Đột phá"), (0, e.Uk)(" và "), (0, e.Wm)("strong", null, "03 giải lan tỏa"), (0, e.Uk)(". Mỗi giải thưởng sẽ tương ứng với một bộ quà tặng Keycap độc đáo gồm: ")]), (0, e.Wm)("ul", {
                        class: "mb-4 ml-8 list-disc"
                    }, [(0, e.Wm)("li", null, "X Keycap cỡ lớn (Enter, Shift, Caps lock...), mỗi keycap lớn trị giá 500.000VND."), (0, e.Wm)("li", null, "Y Keycap cỡ nhỏ, mỗi keycap nhỏ trị giá 460.000VND.")]), (0, e.Wm)("p", {
                        class: "mb-4"
                    }, [(0, e.Uk)(" Họa tiết của keycap được các nghệ nhân tại "), (0, e.Wm)("strong", null, "PearlViet"), (0, e.Uk)(" làm handmade đặc biệt cho Viblo theo chủ đề của từng tháng, tỉ mỉ và công phu tới từng chi tiết.")]), (0, e.Wm)("p", {
                        class: "mb-4"
                    }, " Trong đó, X và Y là số lượng của loại keycap. Tùy thuộc theo thứ hạng đạt được, số lượng của các loại keycap trong bộ quà tặng sẽ thay đổi theo thứ hạng tương ứng (chi tiết bên dưới). ")])], -1),
                    st = {
                        class: "flex flex-col lg:flex-row leading-loose tracking-wider"
                    },
                    ot = {
                        class: "flex-1 mt-2 lg:mr-5"
                    },
                    rt = (0, e.Wm)("h4", {
                        class: "section-subtitle text-yellow-200"
                    }, "05 Giải đột phá", -1),
                    ht = (0, e.Wm)("p", {
                        class: "mb-4"
                    }, " Ban tổ chức sẽ lọc ra 5 thành viên trên Viblo có điểm tương tác cao nhất trên hệ thống Viblo để xếp hạng và trao giải hàng tháng. Trong trường hợp số điểm bằng nhau, BTC sẽ xét tiêu chí phụ lần lượt là: Thời gian bắt đầu tham gia sự kiện > số lượt votes > số lượt clips > số lượt comment > số lượt view. ", -1),
                    mt = {
                        class: "rewards flex flex-col"
                    },
                    gt = {
                        class: "flex-1 mt-2 lg:ml-5"
                    },
                    ut = (0, e.Wm)("h4", {
                        class: "section-subtitle text-yellow-200"
                    }, "03 giải lan tỏa", -1),
                    pt = (0, e.Wm)("p", {
                        class: "mb-4"
                    }, [(0, e.Uk)(" Ngoài 05 giải chính, mỗi tháng ban tổ chức sẽ trao 03 giải Lan Tỏa cho tác giả Viblo có tổng điểm tương tác cao nhất trên Facebook để trao thưởng. Điểm tương tác được tính dựa trên các bài chia sẻ lại bài viết của tác giả lên Facebook (thực hiện bởi tác giả, hoặc người khác) ở chế công khai gắn hashtag "), (0, e.Wm)("strong", null, "#Vui_Tet_Viblo_Tram_Tro_Keycap"), (0, e.Uk)("fan page và người chia sẻ đã thực hiện like "), (0, e.Wm)("a", {
                        href: "https://www.facebook.com/viblo.asia"
                    }, "fan page"), (0, e.Uk)(" Viblo trên Facebook. ")], -1),
                    vt = (0, e.Wm)("p", {
                        class: "mb-4"
                    }, " Điểm tương tác = Tổng số reactions + Tổng số comment + Tổng lượt share. ", -1),
                    dt = {
                        class: "rewards flex flex-col"
                    };

                function bt(t, n, i, l, c, a) {
                    var s = (0, e.up)("Reward");
                    return (0, e.wg)(), (0, e.j4)("div", nt, [(0, e.Wm)("div", it, [et, (0, e.Wm)("div", lt, [(0, e.Wm)("div", ct, [at, (0, e.Wm)("div", st, [(0, e.Wm)("div", ot, [rt, ht, (0, e.Wm)("div", mt, [(0, e.Wm)(s, {
                        rank: "01",
                        description: "03 Keycap cỡ lớn + 02 Keycap cỡ nhỏ",
                        value: "1960000"
                    }), (0, e.Wm)(s, {
                        rank: "02",
                        description: "02 Keycap cỡ lớn + 01 Keycap cỡ nhỏ",
                        value: "1460000"
                    }), (0, e.Wm)(s, {
                        rank: "03",
                        description: "01 Keycap cỡ lớn + 01 Keycap cỡ nhỏ",
                        value: "960000"
                    }), (0, e.Wm)(s, {
                        rank: "04",
                        description: "01 Keycap cỡ lớn",
                        value: "500000"
                    }), (0, e.Wm)(s, {
                        rank: "05",
                        description: "01 Keycap cỡ nhỏ",
                        value: "460000"
                    })])]), (0, e.Wm)("div", gt, [ut, pt, vt, (0, e.Wm)("div", dt, [(0, e.Wm)(s, {
                        rank: "01",
                        description: "03 Keycap cỡ lớn + 02 Keycap cỡ nhỏ",
                        value: "1960000"
                    }), (0, e.Wm)(s, {
                        rank: "02",
                        description: "01 Keycap cỡ lớn",
                        value: "1460000"
                    }), (0, e.Wm)(s, {
                        rank: "03",
                        description: "01 Keycap cỡ nhỏ",
                        value: "460000"
                    })])])])])])])])
                }
                i(2526), i(1817);
                var ft = {
                        class: "text-yellow-200 mb-4 sm:text-left"
                    },
                    wt = {
                        class: "mr-4"
                    },
                    yt = {
                        class: "text-yellow-300 font-extrabold text-bold text-xl"
                    },
                    xt = {
                        class: "text-yellow-300 font-extrabold text-md ml-4"
                    },
                    kt = (0, e.Wm)("span", null, "Trị giá quà tặng:", -1),
                    Wt = {
                        class: "ml-4 text-lg"
                    };

                function Tt(t, n, i, l, c, a) {
                    var s = (0, e.up)("GiftOutline");
                    return (0, e.wg)(), (0, e.j4)("div", ft, [(0, e.Wm)("div", wt, [(0, e.Wm)("span", yt, "#" + (0, e.zw)(i.rank) + ": ", 1), (0, e.Wm)("span", xt, (0, e.zw)(i.description), 1)]), (0, e.Wm)("div", null, [kt, (0, e.Wm)("strong", Wt, [(0, e.Wm)(s, {
                        class: "inline-block"
                    }), (0, e.Uk)(" " + (0, e.zw)(l.valueFormatted) + " VND ", 1)])])])
                }
                var _t = i(1676),
                    Vt = {
                        components: {
                            GiftOutline: _t.O_g
                        },
                        props: {
                            rank: String,
                            description: String,
                            value: String
                        },
                        setup: function (t) {
                            var n = (0, e.iH)(t.value),
                                i = (0, e.Fl)((function () {
                                    var t = new Intl.NumberFormat("vi", {
                                        maximumSignificantDigits: 3
                                    });
                                    return t.format(parseInt(n.value))
                                }));
                            return {
                                valueFormatted: i
                            }
                        }
                    };
                Vt.render = Tt;
                var jt = Vt,
                    qt = {
                        components: {
                            Reward: jt
                        }
                    };
                qt.render = bt;
                var Ct = qt,
                    Bt = i.p + "images/logo.png",
                    Mt = i.p + "images/zunokie.png",
                    It = {
                        class: "bg-footer w-full py-16 md:py-24 flex justify-center text-white"
                    },
                    Kt = {
                        class: "max-w-screen-lg w-full flex flex-col items-center mx-2"
                    },
                    St = (0, e.Wm)("div", {
                        class: "w-full flex flex-wrap justify-center md:justify-between"
                    }, [(0, e.Wm)("div", {
                        class: "flex mb-12 self-center md:self-start items-center"
                    }, [(0, e.Wm)("div", {
                        class: "mr-12"
                    }, [(0, e.Wm)("img", {
                        src: Bt,
                        class: "block w-28",
                        alt: "SVCG hạt Lạc Đạo - Liễu Đề - Quỹ Nhất"
                    })]), (0, e.Wm)("a", {
                        class: "border-l block pl-12",
                        href: "https://viblo.asia?utm_source=viblo&utm_medium=footer&utm_campaign=happy_new_year",
                        target: "_blank",
                        rel: "noreferrer"
                    }, " Group Facebook ")]), (0, e.Wm)("div", {
                        class: "flex mb-12 self-center md:self-start items-center"
                    }, [(0, e.Wm)("span", {
                        class: "mx-12"
                    }, "© 2021 Copyright by"), (0, e.Wm)("div", null, [(0, e.Wm)("a", {
                        href: "https://pearlviet.com/?utm_source=viblo&utm_medium=footer&utm_campaign=happy_new_year",
                        target: "_blank"
                    }, [(0, e.Wm)("img", {
                        src: Mt,
                        class: "block w-36",
                        alt: "Zunokie Logo"
                    })])])])], -1),
                    Ut = {
                        class: "w-full flex flex-col md:flex-row justify-between items-center"
                    },
                    Ht = {
                        class: "flex items-center mb-2"
                    },
                    Nt = {
                        class: "mr-2 text-title text-lg"
                    },
                    Ft = (0, e.Wm)("div", {
                        class: "footer-info"
                    }, [(0, e.Wm)("a", {
                        href: "tel:0393932114"
                    }, "0393.932.114"), (0, e.Uk)(" (Jos.Tiên)")], -1),
                    Yt = {
                        class: "flex items-center mb-2"
                    },
                    Pt = {
                        class: "mr-2 text-title text-lg"
                    },
                    zt = (0, e.Wm)("div", {
                        class: "footer-info"
                    }, [(0, e.Wm)("a", {
                        href: "mailto:btc.lacdaolieudequynhat@gmail.com"
                    }, "btc.lacdaolieudequynhat@gmail.com")], -1),
                    Rt = {
                        class: "flex items-center mb-2"
                    },
                    Lt = {
                        class: "mr-2 text-title text-xl"
                    },
                    Ot = (0, e.Wm)("div", {
                        class: "footer-info"
                    }, [(0, e.Wm)("a", {
                        href: "https://fb.com/viblo.asia",
                        target: "_blank",
                        rel: "noreferrer"
                    }, " https://fb.com/viblo.asia ")], -1);

                function Et(t, n, i, l, c, a) {
                    var s = (0, e.up)("Phone"),
                        o = (0, e.up)("At"),
                        r = (0, e.up)("Facebook");
                    return (0, e.wg)(), (0, e.j4)("footer", It, [(0, e.Wm)("div", Kt, [St, (0, e.Wm)("div", Ut, [(0, e.Wm)("div", Ht, [(0, e.Wm)("div", Nt, [(0, e.Wm)(s)]), Ft]), (0, e.Wm)("div", Yt, [(0, e.Wm)("div", Pt, [(0, e.Wm)(o)]), zt]), (0, e.Wm)("div", Rt, [(0, e.Wm)("div", Lt, [(0, e.Wm)(r)]), Ot])])])])
                }
                var At = {
                    components: {
                        At: _t.At,
                        Phone: _t.LPZ,
                        Facebook: _t.s1S
                    }
                };
                At.render = Et;
                var Gt = At,
                    Dt = {
                        components: {
                            MainSection: z,
                            IntroSection: A,
                            RulesSection: $,
                            RewardsSection: Ct,
                            FooterSection: Gt
                        }
                    };
                Dt.render = T;
                var Qt = Dt,
                    Xt = (i(2222), {
                        id: "faq-section",
                        class: "bg-section"
                    }),
                    Zt = {
                        class: "bg-section-inner min-h-screen py-16 md:py-24 flex justify-center"
                    },
                    Jt = {
                        class: "max-w-screen-lg w-full relative h-full flex flex-col justify-center mx-4"
                    },
                    $t = (0, e.Wm)("h3", {
                        class: "section-title text-title font-bold"
                    }, " FAQ: Các câu hỏi thường gặp ", -1),
                    tn = {
                        class: "text-title text-xl font-bold"
                    };

                function nn(t, n, i, l, c, a) {
                    return (0, e.wg)(), (0, e.j4)("div", Xt, [(0, e.Wm)("div", Zt, [(0, e.Wm)("div", Jt, [$t, ((0, e.wg)(!0), (0, e.j4)(e.HY, null, (0, e.Ko)(l.faqItems, (function (t, n) {
                        return (0, e.wg)(), (0, e.j4)("div", {
                            key: n,
                            class: "text-white text-base sm:text-lg text-justify py-4"
                        }, [(0, e.Wm)("p", tn, (0, e.zw)("".concat(n + 1, ". ").concat(t.title)), 1), (0, e.Wm)("p", null, (0, e.zw)(t.answer), 1)])
                    })), 128))])])])
                }
                var en = [{
                        title: "Những ai có thể tham gia sự kiện này?",
                        answer: "Bất kỳ ai có tài khoản trên Viblo và có địa chỉ nhận quà trong lãnh thổ Việt Nam."
                    }, {
                        title: "Làm thế nào để đăng ký tham gia sự kiện?",
                        answer: "Sự kiện Chào xuân 2021: Vui Tết Viblo - Trầm trồ Keycap không yêu cầu người dùng Viblo phải thực hiện bước đăng ký để tham gia sự kiện. Người dùng Viblo chỉ cần thực hiện publish ít nhất một bài viết lên Viblo kèm theo tag Happy New Year là sẽ được BTC tính là đang tham gia sự kiện."
                    }, {
                        title: "Tôi thêm tag Happy New Year vào một bài viết của tôi trước đó thì có được không?",
                        answer: "Không, chỉ bài viết gắn tag Happy New Year được publish trong Quý I - 2021 và đang có trạng thái là public mới được tính."
                    }, {
                        title: "Làm như nào để tôi có thể nhập thông tin người nhận quà? Tôi có thể nhờ người nhận hộ được hay không?",
                        answer: "Hãy đảm bảo rằng bạn đã điền đầy đủ thông tin cá nhân tại https://accounts.viblo.asia/profile/contact. Sau khi sự kiện kết thúc, BTC sẽ dựa vào phần thông tin đó để có thể liên hệ và chuyển phần quà dành cho những người chiến thắng. Nếu bạn không có mặt trong thời gian phần quà được chuyển đến, bạn có thể nhờ người khác nhận hộ."
                    }, {
                        title: "Nếu điểm tương tác của hai tác giả bằng nhau thì sẽ xét thưởng như nào?",
                        answer: "Trong trường hợp điểm của hai tác giả bằng nhau thì BTC sẽ dựa vào thời gian publish bài viết để đánh giá thứ hạng. Bài viết nào có thời gian publish sớm hơn thì sẽ được đánh giá cao hơn."
                    }, {
                        title: "Tôi có viết bài nhưng quên không gắn tag Happy New Year cho bài viết thì liệu có sao không?",
                        answer: "Để tham gia sự kiện bạn bắt buộc phải thêm tag Happy New Year vào bài viết, nếu không bài đó sẽ không được thống kê. Nếu hiện tại bài viết chưa được thêm tag, bạn có thể dùng chức năng edit bài viết rồi thêm tag Happy New Year vào là được."
                    }, {
                        title: "Bài viết của tôi được viết từ trước, nhưng lúc đó tôi chưa publish ra mà chỉ để ở trạng thái draft, giờ tôi publish ra với tag Happy New Year thì có được tính không?",
                        answer: "Có, chỉ cần thời gian bạn publish bài viết nằm trong Quý I - 2021 là được, không quan trọng bài viết được tạo ra từ khi nào."
                    }, {
                        title: "Có yêu cầu gì cụ thể về chất lượng cho các bài viết không?",
                        answer: "Vì bài viết được đăng tải trên nền tảng Viblo nên phải chấp hành các quy định chung của Viblo như Có nội dung chia sẻ kiến thức về CNTT và không bị đánh gấu là bài spam trên hệ thống. Bài viết phải được viết bởi chính người tham gia, BTC sẽ không chấp nhận bài dịch hay sao chép của tác giả khác."
                    }, {
                        title: "Khi nào quà tặng sẽ được gửi đi và dự kiến bao giờ tôi sẽ nhận được quà?",
                        answer: "Sự kiện lần này được tổ chức với các phần quà được đem đến từ nhà tài trợ  PearlViet. Do vậy, việc vận chuyển các phần quà đến tay người chiến thắng sẽ do PearlViet đảm nhận. Dự kiến phần quà sẽ được gửi đi ngay sau khi sự kiện kết thúc và sẽ đến tay bạn trong khoảng 1 đến 2 tuần sau đó."
                    }, {
                        title: "Tôi chia sẻ bài viết của người khác lên trên Facebook liệu tôi có được tính giải hay không?",
                        answer: "Không, mặc dù giải lan tỏa được tính dựa trên lượt tương tác của bài viết trên Facebook nhưng giải thưởng sẽ được trao cho tác giả của bài viết trên nền tảng Viblo. Điều này giúp bảo vệ quyền lợi và công sức của chính tác giả bài viết."
                    }, {
                        title: "Tôi chia sẻ bài viết trên Viblo lên nhiều nơi trên Facebook, vậy điểm tương tác có được tính bằng tổng lượt tương tác của các bài chia sẻ không?",
                        answer: "Nếu bài viết có nhiều lượt chia sẻ trên Facebook, điểm tương tác sẽ được tính dựa trên tổng số lượt tương tác (reaction, comment, share) của các bài chia sẻ trên Facebook. BTC có quyền từ chối tính kết quả nếu phát hiện có trường hợp gian lận."
                    }, {
                        title: "Làm sao để BTC biết rằng tôi đã chia sẻ bài viết lên Facebook?",
                        answer: "Để BTC có thể theo dõi và thống kê, các bài chia sẻ lên Facebook phải được để ở chế độ công khai và gắn theo hashtag #Vui_Tet_Viblo_Tram_Tro_Keycap."
                    }],
                    ln = {
                        setup: function () {
                            return {
                                faqItems: en
                            }
                        }
                    };
                ln.render = nn;
                var cn = ln,
                    an = [{
                        path: "/cuocthianh/",
                        name: "Home",
                        component: Qt
                    }, {
                        path: "/cuocthianh/faq",
                        name: "FAQ",
                        component: cn
                    }],
                    sn = (0, b.p7)({
                        scrollBehavior: function () {
                            return {
                                top: 0
                            }
                        },
                        history: (0, b.PO)(),
                        routes: an
                    }),
                    on = sn;
                (0, e.ri)(k).use(on).mount("#app")
            }
        },
        n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var l = n[e] = {
            exports: {}
        };
        return t[e](l, l.exports, i), l.exports
    }
    i.m = t, i.x = function () {},
        function () {
            i.d = function (t, n) {
                for (var e in n) i.o(n, e) && !i.o(t, e) && Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n[e]
                })
            }
        }(),
        function () {
            i.g = function () {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function () {
            i.o = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n)
            }
        }(),
        function () {
            i.p = "/"
        }(),
        function () {
            var t = {
                    143: 0
                },
                n = [
                    [1041, 998]
                ],
                e = function () {},
                l = function (l, c) {
                    for (var a, s, o = c[0], r = c[1], h = c[2], m = c[3], g = 0, u = []; g < o.length; g++) s = o[g], i.o(t, s) && t[s] && u.push(t[s][0]), t[s] = 0;
                    for (a in r) i.o(r, a) && (i.m[a] = r[a]);
                    h && h(i), l && l(c);
                    while (u.length) u.shift()();
                    return m && n.push.apply(n, m), e()
                },
                c = self["webpackChunkhappy_new_year"] = self["webpackChunkhappy_new_year"] || [];

            function a() {
                for (var e, l = 0; l < n.length; l++) {
                    for (var c = n[l], a = !0, s = 1; s < c.length; s++) {
                        var o = c[s];
                        0 !== t[o] && (a = !1)
                    }
                    a && (n.splice(l--, 1), e = i(i.s = c[0]))
                }
                return 0 === n.length && (i.x(), i.x = function () {}), e
            }
            c.forEach(l.bind(null, 0)), c.push = l.bind(null, c.push.bind(c));
            var s = i.x;
            i.x = function () {
                return i.x = s || function () {}, (e = a)()
            }
        }(), i.x()
})();
//# sourceMappingURL=app.ec6caaf7.js.map
