import { Container } from "@mui/material";
import { CardsGrid } from "../category/cardsGrid";

export const AllProductCardsContent = (props:any) => {
  return (
    <div className="pb-14">
      <Container maxWidth={"lg"}>
        <CardsGrid cardsData={props.products} />
      </Container>
    </div>
  );
};
