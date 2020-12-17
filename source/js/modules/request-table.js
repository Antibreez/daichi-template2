(() => {
  const requests = document.querySelectorAll('.request-table__info');
  const modals = document.querySelectorAll('.request-table__modal');

  if (!requests[0]) {
    return;
  }

  requests.forEach((item, id) => {
    const modal = new Modal(item, modals[id]);
  });
})();
