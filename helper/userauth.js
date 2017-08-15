module.exports = {
  userRole(role) {
    let menuDashboard = [];
    switch (role) {
      case "Headmaster":
        menuDashboard = ['daskboard', 'student', 'subject', 'teacher']
        return menuDashboard
        break;
      case "Teacher":
        menuDashboard = ['daskboard', 'student']
        return menuDashboard
        break;
      case "Academic":
        menuDashboard = ['daskboard', 'student', 'subject']
        return menuDashboard
        break;
      default:
      return 'daskboard'
    }
  }
};
