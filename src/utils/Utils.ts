class Utils {
  convertTimestampToHumanReadable(date = "") {
    const _date = new Date(date);
    return _date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  }
}
export default new Utils();
