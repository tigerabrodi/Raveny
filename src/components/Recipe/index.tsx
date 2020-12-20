import { Recipe as TRecipe } from 'types'
import { Strong, Check, Warn } from 'styles'
import { v4 as uuidv4 } from 'uuid'
import {
  RecipeWrapper,
  Title,
  Image,
  Calories,
  DietLabel,
  HealthLabel,
  LabelWrapper,
  CautionWrapper,
  Serving,
  CautionLabel,
  InfoWrapper,
} from './styles'

type RecipeProps = {
  recipe: TRecipe
}

export const Recipe = ({
  recipe: {
    uri,
    label,
    image,
    calories,
    cautions,
    healthLabels,
    dietLabels,
    yield: servings,
  },
}: RecipeProps) => (
  <RecipeWrapper to={`/recipe/${uri}`}>
    <Title> {label} </Title>
    <Image src={image} alt={label} />
    <Calories>
      <Strong>Calories: </Strong>
      {Math.round(calories / servings)}
    </Calories>
    <Serving>
      <Strong>Servings: </Strong>
      {servings}
    </Serving>
    <InfoWrapper>
      {cautions.length > 0 && (
        <CautionWrapper>
          {cautions.map((caution) => (
            <CautionLabel key={uuidv4()}>
              <Strong>{caution}</Strong> <Warn />
            </CautionLabel>
          ))}
        </CautionWrapper>
      )}
      <LabelWrapper>
        {dietLabels.length > 0 &&
          dietLabels.map((diet) => (
            <DietLabel key={uuidv4()}>
              <Strong>{diet}</Strong> <Check />
            </DietLabel>
          ))}
      </LabelWrapper>
      <LabelWrapper>
        {healthLabels.length > 0 &&
          healthLabels.map((health) => (
            <HealthLabel key={uuidv4()}>
              <Strong>{health}</Strong> <Check />
            </HealthLabel>
          ))}
      </LabelWrapper>
    </InfoWrapper>
  </RecipeWrapper>
)
