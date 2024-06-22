export function convertPrice(price) {
  return price?.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}
export function formatDate(inputDate) {
  // Create a new Date object
  const date = new Date(inputDate);

  // Array for days of the week and months
  const daysOfWeek = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const months = [
    "tháng 1",
    "tháng 2",
    "tháng 3",
    "tháng 4",
    "tháng 5",
    "tháng 6",
    "tháng 7",
    "tháng 8",
    "tháng 9",
    "tháng 10",
    "tháng 11",
    "tháng 12",
  ];

  // Get day of the week, day of the month, and month
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const month = months[date.getUTCMonth()];

  // Get the year
  const year = date.getUTCFullYear();

  // Format the date string
  const formattedDate = `${dayOfWeek} ngày ${dayOfMonth} ${month} năm ${year}`;

  return formattedDate;
}
