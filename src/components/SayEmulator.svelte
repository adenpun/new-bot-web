<script>
  function send() {
    const value = input.value;
    if (value.startsWith("/say ")) {
      messages += `User: ${value}\nNew Bot: ${value.split("/say")[1].trim()}\n`;
      input.value = "";
    } else {
      alert("Syntax error...");
    }
  }

  let messages =
    "=====\nGOODEST /say EMULATOR IN THE WORLD!\n=====\nNew Bot: Hi! You can use /say to make me say things! (/say only, no other commands in this emulator)\n";
  let input;
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
    placeholder="/say whatever you want"
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
