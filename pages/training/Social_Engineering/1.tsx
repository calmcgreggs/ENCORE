import PageLayout from "@/layouts/pagelayout";
import Image from "next/image";

export default function SE1() {
  return (
    <PageLayout>
      <div className="text-center mt-10 px-10 [&>*]:my-10">
        <h1>
          This is Social Engineering Page One. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque aliquet pellentesque quam
          nec mollis. Vestibulum nec elementum odio. Maecenas vitae elit leo.
          Aenean luctus erat sit amet mi luctus sagittis. Curabitur maximus
          dapibus ultricies. Cras a eros blandit, tempus est id, faucibus orci.
          Praesent eget metus elit. Curabitur vel egestas tortor. Quisque non
          euismod leo. Curabitur sodales fringilla nibh, at cursus lorem
          porttitor id. Praesent a erat eu nisl pharetra porta nec ut felis.
          Donec eget facilisis eros, eget gravida ex. Quisque eleifend arcu
          quam, nec finibus ligula porta non. Cras tristique augue id neque
          feugiat molestie.
        </h1>
        <h1>
          Mauris accumsan felis in nisl condimentum fringilla. Integer sit amet
          quam in enim luctus suscipit gravida vel est. Quisque mollis augue sed
          ligula luctus, at dignissim est maximus. Suspendisse arcu neque,
          rutrum eu magna sit amet, viverra mollis massa. Quisque sit amet
          blandit lectus. Integer vel mauris placerat, euismod felis ac, rhoncus
          nulla. Pellentesque consectetur efficitur lacinia. Sed pulvinar metus
          faucibus nunc rhoncus condimentum. Nunc in eros sem. Praesent vel ex
          sem. Praesent posuere nunc quis eleifend elementum. Cras ullamcorper
          nisi id diam interdum viverra. Curabitur feugiat feugiat nunc, at
          feugiat est eleifend nec. Nullam placerat leo a ullamcorper finibus.
          Pellentesque id sagittis est, eget molestie erat. Nam nec lorem a
          libero ornare blandit.
        </h1>
        <Image
          src="/se1.jpg"
          width={400}
          height={200}
          alt="SE1"
          className="mx-auto"
        />
        <h1>
          Sed sollicitudin ipsum varius, convallis neque et, posuere quam. In
          consectetur, sapien eleifend blandit ornare, enim velit pellentesque
          est, vitae molestie nisl orci ac nibh. Suspendisse egestas interdum
          odio et aliquam. Nullam nisl odio, gravida vitae sodales et, sagittis
          vel diam. Donec sagittis egestas tincidunt. Sed eu augue magna. Fusce
          ac dolor vel justo luctus scelerisque. In dolor sapien, varius vitae
          quam vel, malesuada cursus nisl.
        </h1>
      </div>
    </PageLayout>
  );
}
