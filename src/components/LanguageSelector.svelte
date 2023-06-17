<script>
  import { locales, t } from "../utils/locales";

  function onChange(e) {
    const [slash, _originalLocale, ...slug] =
      window.location.pathname.split("/");
    window.location.replace([slash, e.currentTarget.value, ...slug].join("/"));
  }

  export let locale;
</script>

<select
  value="choose"
  class="inline-flex items-center rounded-full border-2 border-white bg-black p-1.5"
  on:change={onChange}
>
  <option value="choose">{t("nav.language_switcher", locale)}</option>
  {#each locales.filter((v) => v !== locale) as locale}
    <option value={locale}>{locale}</option>
  {/each}
</select>
