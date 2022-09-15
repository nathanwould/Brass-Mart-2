import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export interface IBreadcrumbItem {
  name: string;
  href: string;
};

interface Props {
  items?: IBreadcrumbItem[];
};

function BreadCrumbs({ items }: Props) {
  return (
    <Breadcrumb>
      {items?.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={index === items.length - 1}>
          <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}

export default BreadCrumbs;