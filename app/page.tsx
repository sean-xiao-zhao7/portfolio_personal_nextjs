import PageLargeBody from "@/components/layouts/page/page-large-body";
import PageLargeHeader from "@/components/layouts/page/page-large-header";
import PageParagraph from "@/components/layouts/page/page-paragraph";

export default function Home() {
  return <>
    <PageLargeHeader>
      Cyan Jean's Portfolio
    </PageLargeHeader>
    <PageLargeBody>
      Welcome to Cyan Jean's homepage!
      <PageParagraph>
        This is my homepage.
      </PageParagraph>
      <PageParagraph>
        Vestibulum sit amet dapibus magna, quis porta elit. Nunc at odio nec arcu efficitur interdum. Quisque eu ultricies magna. Suspendisse eu commodo ante, vitae consequat diam. Donec ut molestie odio. In hac habitasse platea dictumst. Sed efficitur, ex et lacinia aliquam, lectus tortor sodales tortor, eu tempor lectus justo eu est. Integer sit amet nibh finibus, consectetur magna eget, imperdiet nisi.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer congue, turpis eu laoreet dapibus, nibh odio porttitor metus, et efficitur massa justo sit amet justo. Aenean vitae turpis sollicitudin, viverra dui non, congue velit. Suspendisse semper laoreet mi, vel egestas ipsum lacinia ac. Maecenas suscipit justo quis feugiat semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ac tellus at magna sollicitudin sagittis nec ut dui. Ut mollis, lectus ut sollicitudin eleifend, est turpis gravida justo, in blandit arcu odio a augue. Proin mattis, nisi eget euismod condimentum, turpis nibh tempor ligula, at finibus enim massa sed nulla.
      </PageParagraph>
    </PageLargeBody>
  </>
}
