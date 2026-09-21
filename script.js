const fields = [
  "appName",
  "bundleId",
  "version",
  "platform",
  "minimumOs",
  "ipaFile",
  "fileSize",
  "appBundlePath",
  "archiveType",
];

const placeholders = {
  appName: "Paste here",
  bundleId: "Paste here",
  version: "Paste here",
  platform: "Paste here",
  minimumOs: "Paste here",
  ipaFile: "Paste here",
  fileSize: "Paste here",
  appBundlePath: "Paste here",
  archiveType: "Paste here",
};

function formatValue(value) {
  return value.trim() || placeholders["appName"];
}

function updatePreview() {
  fields.forEach((field) => {
    const input = document.getElementById(field);
    const preview = document.getElementById(`preview-${field}`);
    const rawValue = input.value.trim();

    preview.textContent = rawValue || placeholders[field];
  });
}

fields.forEach((field) => {
  const input = document.getElementById(field);
  input.addEventListener("input", updatePreview);
});

const form = document.getElementById("ipa-form");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const appName = document.getElementById("appName").value.trim() || "Untitled App";
  statusMessage.textContent = `IPA package created for ${appName}.`;
});

updatePreview();
