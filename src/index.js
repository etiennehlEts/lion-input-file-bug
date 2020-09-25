import { LitElement, html } from "lit-element";
import "@lion/dialog/lion-dialog";

class MyComponent extends LitElement {
  static get properties() {
    return {
      options: { type: Array }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <lion-dialog>
        <button slot="invoker">Open dialog</button>
        <div slot="content" style="background: white; padding: 24px;">
          <input type="file" />
          <button
            @click=${(e) =>
              e.target.dispatchEvent(
                new Event("close-overlay", { bubbles: true })
              )}
          >
            x
          </button>
        </div>
      </lion-dialog>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Cursus mattis
        molestie a iaculis at erat pellentesque. Facilisis volutpat est velit
        egestas dui. Pharetra massa massa ultricies mi quis hendrerit dolor
        magna. Lectus nulla at volutpat diam ut. Sit amet porttitor eget dolor
        morbi non arcu. Ullamcorper sit amet risus nullam eget felis eget nunc
        lobortis. At lectus urna duis convallis convallis tellus id interdum.
        Ullamcorper dignissim cras tincidunt lobortis feugiat. Ullamcorper morbi
        tincidunt ornare massa eget egestas purus viverra accumsan. Sed cras
        ornare arcu dui vivamus arcu felis bibendum ut. Arcu non sodales neque
        sodales ut.
      </p>
      <p>
        Euismod in pellentesque massa placerat duis ultricies lacus sed. Arcu
        felis bibendum ut tristique et egestas. Sed elementum tempus egestas sed
        sed risus pretium quam. Ipsum dolor sit amet consectetur adipiscing elit
        pellentesque habitant morbi. Pellentesque elit eget gravida cum sociis
        natoque penatibus et magnis. Tincidunt augue interdum velit euismod in
        pellentesque massa placerat duis. Sagittis id consectetur purus ut
        faucibus pulvinar elementum. Aliquam eleifend mi in nulla posuere
        sollicitudin aliquam ultrices sagittis. Vitae tortor condimentum lacinia
        quis. Tincidunt ornare massa eget egestas purus viverra accumsan in.
        Tellus pellentesque eu tincidunt tortor aliquam. Orci ac auctor augue
        mauris augue neque gravida in.
      </p>
      <p>
        Sodales ut eu sem integer vitae justo eget. Sed blandit libero volutpat
        sed cras ornare arcu dui vivamus. Felis bibendum ut tristique et egestas
        quis ipsum suspendisse. Convallis convallis tellus id interdum velit.
        Tellus molestie nunc non blandit massa enim nec. Et pharetra pharetra
        massa massa ultricies mi quis. Arcu non sodales neque sodales ut etiam
        sit amet nisl. Leo integer malesuada nunc vel. Vulputate mi sit amet
        mauris commodo quis imperdiet. Et malesuada fames ac turpis egestas
        integer. Quis ipsum suspendisse ultrices gravida dictum fusce.
        Adipiscing commodo elit at imperdiet dui accumsan sit.
      </p>
      <p>
        Non nisi est sit amet facilisis magna. Vel risus commodo viverra
        maecenas accumsan lacus vel. Malesuada proin libero nunc consequat
        interdum varius sit amet. Pharetra diam sit amet nisl suscipit
        adipiscing bibendum est ultricies. Sagittis purus sit amet volutpat
        consequat mauris nunc congue nisi. Massa tincidunt dui ut ornare lectus
        sit amet est placerat. Mus mauris vitae ultricies leo integer malesuada
        nunc. Arcu vitae elementum curabitur vitae. Scelerisque in dictum non
        consectetur. Sed tempus urna et pharetra pharetra.
      </p>
      <p>
        Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris.
        Adipiscing elit duis tristique sollicitudin. Netus et malesuada fames ac
        turpis. Viverra aliquet eget sit amet. Cursus in hac habitasse platea.
        Consequat ac felis donec et odio pellentesque diam volutpat commodo.
        Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Mattis
        vulputate enim nulla aliquet porttitor lacus luctus accumsan. Dictum
        varius duis at consectetur lorem donec massa sapien. Amet est placerat
        in egestas erat. Facilisi etiam dignissim diam quis enim lobortis
        scelerisque fermentum.
      </p>
    `;
  }
}

customElements.define("my-component", MyComponent);
