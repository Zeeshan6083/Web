document.addEventListener("DOMContentLoaded", () => {
  const country1 = document.getElementById("country1");
  const country2 = document.getElementById("country2");
  const flag1 = document.getElementById("flag1");
  const flag2 = document.getElementById("flag2");
  const orgAmount = document.getElementById("orgAmount");
  const convertBtn = document.getElementById("convertBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");
  const result = document.getElementById("result");
  const swapBtn = document.getElementById("swapBtn");
  const error1 = document.getElementById("error1");
  const error2 = document.getElementById("error2");
  const errorAmount = document.getElementById("errorAmount");

  let countries = [];

  fetch("codes.json")
    .then(res => res.json())
    .then(data => {
      countries = data.filter(c => c.Currency_Code);
      const seen = new Set();
      countries.forEach(c => {
        const key = c.Currency_Code + c.Country_Code;
        if (!seen.has(key)) {
          seen.add(key);
          const opt = document.createElement("option");
          opt.value = `${c.Currency_Code},${c.Country_Code}`;
          opt.textContent = c.Country.toUpperCase();
          country1.appendChild(opt.cloneNode(true));
          country2.appendChild(opt);
        }
      });

      country1.value = "USD,US";
      country2.value = "INR,IN";
      updateFlag(flag1, "US");
      updateFlag(flag2, "IN");
    })
    .catch(() => {
      result.textContent = "Failed to load country data.";
    });

  function updateFlag(imgEl, countryCode) {
    imgEl.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    imgEl.onerror = () => {
      imgEl.src = "https://via.placeholder.com/64?text=🌍";
    };
  }

  country1.addEventListener("change", () => {
    const code = country1.value.split(",")[1];
    updateFlag(flag1, code);
    hideErrors();
  });

  country2.addEventListener("change", () => {
    const code = country2.value.split(",")[1];
    updateFlag(flag2, code);
    hideErrors();
  });

  swapBtn.addEventListener("click", () => {
    const temp = country1.value;
    country1.value = country2.value;
    country2.value = temp;
    const code1 = country1.value.split(",")[1];
    const code2 = country2.value.split(",")[1];
    updateFlag(flag1, code1);
    updateFlag(flag2, code2);
    hideErrors();
    if (orgAmount.value) convertCurrency();
  });

  function hideErrors() {
    [error1, error2, errorAmount].forEach(el => el.style.display = "none");
  }

  function validate() {
    hideErrors();
    if (!country1.value) {
      error1.style.display = "block";
      return false;
    }
    if (!country2.value) {
      error2.style.display = "block";
      return false;
    }
    const amount = parseFloat(orgAmount.value);
    if (isNaN(amount) || orgAmount.value === "") {
      errorAmount.textContent = "Please enter an amount.";
      errorAmount.style.display = "block";
      return false;
    }
    if (amount <= 0) {
      errorAmount.textContent = "Amount must be greater than zero.";
      errorAmount.style.display = "block";
      return false;
    }
    return true;
  }

  async function convertCurrency() {
    if (!validate()) return;

    convertBtn.classList.add("loading");
    btnText.textContent = "Loading…";
    spinner.classList.remove("d-none");
    result.textContent = "";

    const fromCurrency = country1.value.split(",")[0].toLowerCase();
    const toCurrency = country2.value.split(",")[0].toLowerCase();
    const amount = parseFloat(orgAmount.value);

    try {
      const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`);
      const data = await res.json();
      const rate = data[fromCurrency][toCurrency];

      if (!rate) throw new Error("Rate not found");

      const converted = amount * rate;
      result.textContent = `${converted.toFixed(2)} ${toCurrency.toUpperCase()}`;
    } catch (err) {
      result.textContent = "Something went wrong. Please try again.";
    } finally {
      convertBtn.classList.remove("loading");
      btnText.textContent = "Convert";
      spinner.classList.add("d-none");
    }
  }

  convertBtn.addEventListener("click", convertCurrency);
});