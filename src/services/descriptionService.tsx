import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: "hd54r7bn", // Replace with your Sanity project ID
  dataset: "production", // Replace with your Sanity dataset name
});

const renderBlock = (block: any) => {
  if (block._type === "block" && block.children) {
    return block.children.map(renderSpan);
  }
  return null;
};

const renderSpan = (span: any) => {
  if (span._type === "span") {
    return <span key={span._key}>{span.text}</span>;
  }
  return null;
};

export const renderDescription = (description: any) => {
  if (description && description.length > 0) {
    return description.map((block: any) => (
      <p key={block._key}>{renderBlock(block)}</p>
    ));
  }
};

export const getImg = (image: any) => {
  if (image && image.asset) {
    const imageRef = image.asset._ref;
    const imageUrl = builder.image(imageRef).url();
    return imageUrl;
  }
  return "";
};
