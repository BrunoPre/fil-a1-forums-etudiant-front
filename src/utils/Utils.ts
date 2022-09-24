class Utils {
  convertTimestampToHumanReadable(date: string | number, locale = "en-US") {
    const _date = new Date(date);
    return _date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  }
}
export default new Utils();
