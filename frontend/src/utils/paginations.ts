interface Props {
  total: number;
  activePage: number;
}

function centerRule({ total, activePage }: Props): any {
  if (activePage - 1 <= 0) {
    return 1;
  }

  if (activePage === total) {
    return activePage - 2;
  }

  return activePage - 1;
}

function paginations({ total = 1, activePage = 1 } = {}): any {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const visiblePages = 3;

  let pages = [
    1,
    ...Array.from(
      { length: visiblePages },
      (_, i) => i + centerRule({ total, activePage }),
    ),
    total,
  ];

  pages = pages.filter((page, index, array) => array.indexOf(page) === index);

  const firstPage = pages[0];
  const secondPage = pages[1];

  if (secondPage === firstPage + 2) {
    pages = [firstPage, firstPage + 1, ...pages.slice(1)];
  }

  let penultimatePage = pages[pages.length - 2];
  let lastPage = pages[pages.length - 1];

  if (penultimatePage === lastPage - 2) {
    pages = [...pages.slice(0, -1), lastPage - 1, lastPage];
  }

  if (secondPage > firstPage + 2) {
    pages = [firstPage, `...`, ...pages.slice(1)];
  }

  penultimatePage = pages[pages.length - 2];
  lastPage = pages[pages.length - 1];

  if (penultimatePage < lastPage - 2) {
    pages = [...pages.slice(0, -1), `...`, lastPage];
  }

  return pages;
}

export default paginations;
