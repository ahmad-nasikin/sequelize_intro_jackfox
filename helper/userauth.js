module.exports = {
  userRole(role) {
    let menuDashboard = [];
    switch (role) {
      case "headmaster":
        menuDashboard = ['daskboard', 'student', 'subject', 'teacher']
        return menuDashboard
        break;
      case "teacher":
        menuDashboard = ['daskboard', 'student']
        return menuDashboard
        break;
      case "academic":
        menuDashboard = ['daskboard', 'student', 'subject']
        return menuDashboard
        break;
      default:
      return 'daskboard'
    }
  }
};
