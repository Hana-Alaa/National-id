const genders = ["أنثى", "ذكر"];
const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
];
const governorates = {
    "01": "القاهرة",
    "02": "الإسكندرية",
    "03": "بورسعيد",
    "04": "السويس",
    11: "دمياط",
    12: "الدقهلية",
    13: "الشرقية",
    14: "القليوبية",
    15: "كفر الشيخ",
    16: "الغربية",
    17: "المنوفية",
    18: "البحيرة",
    19: "الإسماعيلية",
    21: "الجيزة",
    22: "بني سويف",
    23: "الفيوم",
    24: "المنيا",
    25: "أسيوط",
    26: "سوهاج",
    27: "قنا",
    28: "أسوان",
    29: "الأقصر",
    31: "البحر الأحمر",
    32: "الوادي الجديد",
    33: "مطروح",
    34: "شمال سيناء",
    35: "جنوب سيناء",
    88: "خارج مصر",
};

const form      = document.querySelector(".simpleForm");
const formInput = document.querySelector(".simpleForm input");
const gender    = document.querySelector(".gender");
const locat  = document.querySelector(".location");
const birth     = document.querySelector(".birth");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // if (!formInput.value) return showToast("Please enter an ID");
    // if (!idValidationRegex.test(searchInput.value))
    // return showToast("Invalid ID");
    info.style.display = 'flex'
    const centuryCode     = formInput.value[0];
    const yearCode        = formInput.value[1] + formInput.value[2];
    const monthCode       = formInput.value[3] + formInput.value[4];
    const dayCode         = formInput.value[5] + formInput.value[6];
    const governorateCode = formInput.value[7] + formInput.value[8];
    const genderCode      = formInput.value[12] % 2;
    gender.innerHTML += "<p class='information'>"+ genders[genderCode] +"</p>";
    locat.innerHTML  += "<p class='information'>" + governorates[governorateCode] + "</p>";
    birth.innerHTML  += ` <p class="information"> ${dayCode} ${months[monthCode - 1]} ${centuryCode === "2" ? "19" : "20" }${yearCode} </p>`;
}); 
