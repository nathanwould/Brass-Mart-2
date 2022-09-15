import { IBreadcrumbItem, IProduct } from "../types";
import formatBreadcrumb from "./formatBreadcrumb";

export default function getTheBreadcrumbs(product: IProduct) {
  const categories = [product?.productType, product?.category, product?.instrumentType];
  const breadCrumbs = categories.filter((category: any) => !!category);
  let breadCrumbItems: IBreadcrumbItem[] = [{ name: "Home", href: "/"}];
  breadCrumbs.forEach((item: string | undefined, index: number) => {
    if (item === 'instrument') {
      breadCrumbItems.push({
        name: "Instruments",
        href: "/instruments"
      });
    };
    if (item === 'accessory') {
      breadCrumbItems.push({
        name: "Accessories",
        href: "/accessories"
      });
    };
    if (index === 1) {
      breadCrumbItems.push({
        name: formatBreadcrumb(item || '') + "s",
        href: `/${breadCrumbItems[1].name.toLowerCase()}/${formatBreadcrumb(item || '').toLowerCase()}s`
      })
    };
    if (index === 2 && item !== breadCrumbs[index - 1]) {
      console.log(item)
      breadCrumbItems.push({
        name: formatBreadcrumb(item || ''),
        href: `${breadCrumbItems[index - 1].href}/${formatBreadcrumb(item || '').toLowerCase()}s`
      })
    };
  });
  return breadCrumbItems;
};