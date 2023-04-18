export function getSocialMediaTimestamp(date: Date) {
  let now = new Date();
  let diffMs = now.getTime() - date.getTime();
  let diffSeconds = Math.round(diffMs / 1000);
  let diffMinutes = Math.round(diffSeconds / 60);
  let diffHours = Math.round(diffMinutes / 60);
  let diffDays = Math.round(diffHours / 24);

  if (diffSeconds < 60) {
    return "just now";
  } else if (diffMinutes < 60) {
    return diffMinutes + "m ago";
  } else if (diffHours < 24) {
    return diffHours + "h ago";
  } else if (diffDays == 1) {
    return "tomorrow";
  } else if (diffDays < 7) {
    return diffDays + "d ago";
  } else {
    return date.toLocaleDateString();
  }
}
