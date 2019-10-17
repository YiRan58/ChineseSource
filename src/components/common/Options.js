class Options {


    static getValues() {
        return {
            level: ["初等", "中等", "高等"],
            corpus: ["正确语料", "偏误语料"],
            article: ["记叙文", "议论文", "说明文", "其他"],
        };
    }

    static getValues(value) {
        return {
            level: ["初等", "中等", "高等"],
            corpus: ["正确语料", "偏误语料"],
            article: ["记叙文", "议论文", "说明文", "其他"],
        }[value];
    }

    static login() {
        Options.isLogin = true
    }

    static getIsLogin() {
        return  Options.isLogin
    }

}

export default Options
