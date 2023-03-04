import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localeVi from "dayjs/locale/vi";
import { useSelector } from "react-redux";
dayjs.locale(localeVi);
dayjs.extend(relativeTime);
export function mappingItemsMenu(item) {
  const childItems = item.child_items ? [...item.child_items] : [];

  return {
    name: item.title,
    url: item.url,
    childItems: childItems.map((item) => mappingItemsMenu(item)),
    id: item.ID,
  };
}

export function mappingDataArticles(item) {
  return {
    id: item.id,
    url: item.featured_media_url
      ? item.featured_media_url
      : "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    author: item.author_data,
    category: item.categories,
    title: item.title.rendered,
    content: item.excerpt.rendered,
    date: item.date,
  };
}

export function formatDate(date) {
  const createdDateObj = dayjs(date);
  const dateFormatted = createdDateObj.format("DD/MM/YYYY");
  const dateRelative = createdDateObj.fromNow();
  return { dateFormatted, dateRelative };
}
