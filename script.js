function bookNow(packageType) {
  // Replace these links with your real booking links
  const bookingLinks = {
    basic: "https://yourcalendly.com/basic-detail",
    standard: "https://yourcalendly.com/standard-detail",
    premium: "https://yourcalendly.com/premium-detail"
  };

  window.location.href = bookingLinks[packageType];
}
