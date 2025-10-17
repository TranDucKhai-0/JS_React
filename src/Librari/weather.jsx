export function getWeatherIcon(code) {
  if (code === 0) return "☀️ Trời quang";
  if (code >= 1 && code <= 3) return "🌤️ Có mây";
  if (code >= 45 && code <= 48) return "🌫️ Sương mù";
  if (code >= 51 && code <= 57) return "🌦️ Mưa phùn";
  if (code >= 61 && code <= 67) return "🌧️ Mưa nhẹ";
  if (code >= 71 && code <= 77) return "❄️ Tuyết";
  if (code >= 80 && code <= 82) return "🌧️🌧️ Mưa to";
  if (code === 95) return "⛈️ Dông nhẹ";
  if (code >= 96 && code <= 99) return "🌩️ Dông mạnh";
  return "❔ Không xác định";
}