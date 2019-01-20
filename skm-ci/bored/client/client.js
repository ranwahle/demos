main();

async function main() {
  let response = await fetch('/activity');
  let activity = await response.json();
  document.querySelector('main').innerHTML = activity.activity;
}