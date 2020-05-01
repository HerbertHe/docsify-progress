var defaultOptions = {
    position: "top",
    color: "var(--theme-color,#42b983)",
    height: "3px",
}

function plugin(hook, vm) {
    let marginTop
    hook.mounted(function () {
        const content = document.getElementsByClassName("content")[0]
        marginTop = parseFloat(
            window.getComputedStyle(content).paddingTop.replace("px", "")
        )

        let insertDOM = `
        <div style="position: fixed; width: 100%; z-index: 999; height: ${
            defaultOptions.height
        };
        ${defaultOptions.position === "top" ? "top: 0;" : "bottom: 0;"}">
            <div id="progress-display" style="background-color: ${
                defaultOptions.color
            }; width: 0; border-radius: 2px; height: ${
            defaultOptions.height
        }; transition: width 0.3s;"></div>
        </div>
        `
        const mainDOM = document.getElementsByTagName("main")[0]
        mainDOM.innerHTML = mainDOM.innerHTML + insertDOM
    })
    hook.ready(function () {
        window.addEventListener("scroll", function (e) {
            let totalHeight =
                marginTop +
                parseFloat(
                    window
                        .getComputedStyle(document.getElementById("main"))
                        .height.replace("px", "")
                )
            let scrollTop =
                document.body.scrollTop + document.documentElement.scrollTop
            let remain = totalHeight - document.body.offsetHeight
            document.getElementById("progress-display").style.width =
                Math.ceil(scrollTop / remain * 100)+ '%'
        })
    })
}

// Docsify plugin options
window.$docsify["progress"] = Object.assign(
    defaultOptions,
    window.$docsify["progress"]
)
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
