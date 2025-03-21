import { Container } from "@mui/material";

export const AllCategoriesHeader = () => {
  return (
    <div className="py-10">
      <Container maxWidth={"lg"}>
        <div>
          <h1 className="text-4xl fw_600 text-center">All Categories</h1>
          <p className="mt-4 text-center fw_400">
            Choose a packaging style for your custom boxes, start designing with
            us, and get your
            <br className="hidden md:block" /> boxes with the most advanced
            printing techniques.
          </p>
        </div>
      </Container>
    </div>
  );
};
