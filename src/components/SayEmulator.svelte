<script>
  import { t } from "../utils/locales";
  export let locale;

  function send() {
    const value = input.value;
    if (value.startsWith("/say ")) {
      messages += `${t("text.user", locale)}: ${value}\nNew Bot: ${value
        .split("/say")[1]
        .trim()}\n`;
      input.value = "";
    } else {
      alert("Syntax error...");
    }
  }

  let input;
  let messages = `=====\n${t(
    "feature.say.emulator.introduction",
    locale
  )}\n=====\nNew Bot: ${t("feature.say.emulator.newbotmonologue", locale)}\n`;
</script>

<div>
  <textarea
    readonly
    class="inline-block h-96 w-full resize-none rounded-3xl bg-gray-700 p-3 md:w-96"
    >{messages}</textarea
  >
</div>
<div>
  <input
    type="text"
    placeholder={t("feature.say.emulator.input.placeholder", locale)}
    class="rounded-full bg-gray-700 p-3"
    bind:this={input}
    on:keypress={(e) => {
      if (e.key === "Enter") {
        send();
      }
    }}
  />
  <button
    on:click={() => {
      send();
    }}
    class="rounded-full bg-gray-700 p-3 hover:bg-gray-800 active:bg-gray-900"
    >Send</button
  >
</div>
