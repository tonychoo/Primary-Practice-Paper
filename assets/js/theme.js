/* Light / dark appearance. Loaded in <head> on every page so the saved choice is applied before the
   page paints (no flash). "auto" follows the device setting; "light" and "dark" override it. The choice
   is kept in this browser only. site.css reads <html data-theme="light|dark">. */
"use strict";
(function () {
  var KEY = "p3-theme";
  var root = document.documentElement;
  function read() {
    try { var v = localStorage.getItem(KEY); return v === "light" || v === "dark" ? v : "auto"; } catch (e) { return "auto"; }
  }
  function apply(mode) {
    if (mode === "light" || mode === "dark") root.setAttribute("data-theme", mode); else root.removeAttribute("data-theme");
  }
  function save(mode) {
    try { if (mode === "auto") localStorage.removeItem(KEY); else localStorage.setItem(KEY, mode); } catch (e) { /* private mode: still applies for this visit */ }
  }
  apply(read());

  var LABELS = [["auto", "Auto"], ["light", "Light"], ["dark", "Dark"]];

  /* Builds the three-button Auto / Light / Dark switch. Any number can exist on a page; they stay in sync. */
  function control() {
    var wrap = document.createElement("div");
    wrap.className = "themeswitch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Appearance");
    var buttons = LABELS.map(function (pair) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = pair[1];
      b.dataset.mode = pair[0];
      b.addEventListener("click", function () { set(pair[0]); });
      wrap.append(b);
      return b;
    });
    wrap._sync = function (mode) { buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.mode === mode)); }); };
    wrap._sync(read());
    controls.push(wrap);
    return wrap;
  }
  var controls = [];
  function set(mode) {
    apply(mode); save(mode);
    controls.forEach(function (c) { c._sync(mode); });
  }
  window.P3Theme = { control: control, get: read, set: set };
})();
