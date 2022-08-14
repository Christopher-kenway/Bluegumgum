// JavaScript source code
const someTabTriggerEl = document.querySelector('#someTabTrigger')
const tab = new bootstrap.Tab(someTabTriggerEl)

tab.show()
    (function InputManagement_() {
        (HTMLElement.prototype.renderUsingInput = function (input) {
            if (!input) throw Error("invalid input");
            try {
                input = JSON.parse(input);
            } catch (e) {
                throw Error("invalid input");
            }

            let selector = "";
            for (let field of input) {
                (selector = field.tag),
                    (selector += field.id ? "#" + field.id : ""),
                    (selector += field.name ? "[name='" + field.name + "']" : ""),
                    (selector += field.type ? "[type='" + field.type + "']" : "");
                let eles = document.querySelectorAll(selector),
                    retrieved = eles[0];
                if (eles.length > 1 && field.type === "radio") {
                    selector += "[value='" + field.value + "']";
                    retrieved = document.querySelector(selector);
                    if (field.isSelected) retrieved.checked = true;
                    else retrieved.checked = false;
                } else if (field.type === "checkbox") retrieved.checked = field.value;
                else {
                    retrieved.value = field.value;
                }
            }

            this.querySelectorAll("input, select, textarea").forEach(ele => { });
        }),
            (HTMLElement.prototype.getChildInputValues = function () {
                let objectArray = [];
                this.querySelectorAll("input, select, textarea").forEach(ele => {
                    let props = ele.getProps();
                    if (props) objectArray.push(props);
                });
                return {
                    fields: objectArray,
                    storable: JSON.stringify(objectArray),
                    renderAll() { },
                    getBy(prop, value) {
                        let result = objectArray.filter(ele => ele[prop] === value);
                        return (
                            result[0] || {
                                value: undefined
                            }
                        );
                    },
                    getGroup(groupName) {
                        let result = objectArray.filter(ele => ele.name === groupName);
                        result = result.filter(ele => ele.isSelected);
                        return (
                            result[0] || {
                                value: undefined
                            }
                        );
                    },
                    getByName(name) {
                        return this.getBy('name', name);
                    },
                    getByID(id) {
                        return this.getBy('id', id);
                    },
                    getByText(txt) {
                        return this.getBy('text', txt);
                    },
                    getByType(type) {
                        return this.getBy('type', type);
                    },
                    getByValue(value) {
                        return this.getBy('value', value);
                    },
                    getByGroup(groupName) {
                        return this.getGroup(groupName);
                    }
                };
            });

        HTMLInputElement.prototype.getProps = HTMLSelectElement.prototype.getProps = HTMLTextAreaElement.prototype.getProps = function () {
            switch (this.tagName) {
                case "SELECT":
                    return {
                        value: this.value,
                        name: this.name,
                        text: this.options[this.selectedIndex].textContent,
                        tag: this.tagName,
                        id: this.id || null,
                        ele: this
                    };
                    break;
                case "TEXTAREA":
                    return {
                        value: this.value,
                        name: this.name,
                        text: this.textContent || "",
                        tag: this.tagName,
                        id: this.id || null,
                        ele: this
                    };
                case "INPUT":
                    switch (this.type) {
                        case "date":
                        case "color":
                        case "text":
                            return {
                                value: this.value,
                                name: this.name,
                                text: this.textContent || "",
                                tag: this.tagName,
                                type: this.type,
                                id: this.id || null,
                                ele: this
                            };
                            break;
                        case "checkbox":
                            return {
                                value: this.checked,
                                checked: this.checked,
                                name: this.name,
                                text: this.textContent || "",
                                tag: this.tagName,
                                type: this.type,
                                id: this.id || null,
                                ele: this
                            };
                            break;
                        case "radio":
                            let checked = this.querySelector(
                                "input[name='" + this.name + "']:checked"
                            );
                            let amichecked = this.checked;
                            return {
                                isSelected: amichecked,
                                getSelected() {
                                    return checked ? checked : false;
                                },
                                value: this.value,
                                ele: this,
                                checked: this.checked,
                                name: this.name,
                                text: this.textContent || "",
                                tag: this.tagName,
                                type: this.type,
                                id: this.id || null,
                                ele: this
                            };
                            break;
                    }
            }
        };
    })();

//test code

let $get = document.querySelector.bind(document),
    create = (tag, props = {}) => Object.assign(document.createElement(tag), props),
    container = $get("#testForm"),
    save_btn = document.body.appendChild(
        create("button", { textContent: "Save", id: "save_btn" })
    ),
    load_btn = document.body.appendChild(
        create("button", { textContent: "Load", id: "load_btn" })
    ),
    onClick = (ele, fn) => ele.addEventListener('click', () => fn()),
    input;

onClick(save_btn, (e) => {
    input = container.getChildInputValues();
    input.getByName("first_name").ele.style.border = "1px solid red";
})
onClick(load_btn, (e) => {
    if (input) container.renderUsingInput(input.storable);
})