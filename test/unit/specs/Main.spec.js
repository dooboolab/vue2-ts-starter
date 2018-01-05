import Vue from "vue";
import Main from "@/components/Main";

describe("Main.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Login);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".wrapper .content h1").textContent)
    .to.equal("dooboo")
  });
});
