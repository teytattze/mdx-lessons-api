export const ASCENDING_ORDER = 'ASC';
export const DESCENDING_ORDER = 'DESC';

export const sortOptions = {
  PRICE_ASC: {
    title: 'Price - Asc',
    value: 'PRICE_ASC',
    order: ASCENDING_ORDER,
    field: 'price',
  },
  PRICE_DESC: {
    title: 'Price - Desc',
    value: 'PRICE_DESC',
    order: DESCENDING_ORDER,
    field: 'price',
  },
  SUBJECT_ASC: {
    title: 'Subject - Asc',
    value: 'SUBJECT_ASC',
    order: ASCENDING_ORDER,
    field: 'subject',
  },
  SUBJECT_DESC: {
    title: 'Subject - Desc',
    value: 'SUBJECT_DESC',
    order: DESCENDING_ORDER,
    field: 'subject',
  },
  LOCATION_ASC: {
    title: 'Location - Asc',
    value: 'LOCATION_ASC',
    order: ASCENDING_ORDER,
    field: 'location',
  },
  LOCATION_DESC: {
    title: 'Location - Desc',
    value: 'LOCATION_DESC',
    order: DESCENDING_ORDER,
    field: 'location',
  },
  AVAILABILITY_ASC: {
    title: 'Availability - Asc',
    value: 'AVAILABILITY_ASC',
    order: ASCENDING_ORDER,
    field: 'slot',
  },
  AVAILABILITY_DESC: {
    title: 'Availability - Desc',
    value: 'AVAILABILITY_DESC',
    order: DESCENDING_ORDER,
    field: 'slot',
  },
};

export const lessonsData = {
  lessons: [],
  filters: {
    searchTerms: '',
    selectedSortOption: '',
  },
};

export const lessonsMethods = {
  decreaseLessonSlot: function (id, quantity) {
    const { data: lesson } = this.getLessonAndIndexById(id);
    lesson.slot -= quantity;
  },
  increaseLessonSlot: function (id, quantity) {
    const { data: lesson } = this.getLessonAndIndexById(id);
    lesson.slot += quantity;
  },
  getLessonAndIndexById: function (id) {
    const index = this.lessons.findIndex((item) => item.id === id);
    return index !== -1
      ? { index, data: this.lessons[index] }
      : { index, data: this.lessons[index] };
  },
};

export const lessonsComputed = {
  filteredLessons: function () {
    const option = sortOptions[this.filters.selectedSortOption] || '';
    const searchTerms = this.filters.searchTerms;
    return sortLessons(this.lessons, option.field, {
      order: option.order,
    }).filter(
      (lesson) =>
        lesson.subject.toLowerCase().includes(searchTerms.toLowerCase()) ||
        lesson.location.toLowerCase().includes(searchTerms.toLowerCase()),
    );
  },
  sortOptions: function () {
    return [...Object.keys(sortOptions)].map((option) => sortOptions[option]);
  },
};

const sortLessons = (arr, key, options) => {
  const asc = (a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  };

  const desc = (a, b) => {
    if (a[key] > b[key]) return -1;
    if (a[key] < b[key]) return 1;
    return 0;
  };

  return options.order === ASCENDING_ORDER ? arr.sort(asc) : arr.sort(desc);
};
