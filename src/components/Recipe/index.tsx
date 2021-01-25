import { Recipe as TRecipe } from 'types'
import { Strong, Check, Warn } from 'styles'
import { v4 as uuidv4 } from 'uuid'
import {
  RecipeWrapperLink,
  Title,
  Image,
  Calories,
  Diet,
  Health,
  DietSection,
  HealthSection,
  CautionSection,
  Serving,
  Caution,
  InfoSection,
} from './styles'

type RecipeProps = {
  recipe: TRecipe
}

export const Recipe = ({
  recipe: {
    id,
    label,
    image,
    calories,
    cautions,
    healthLabels,
    dietLabels,
    yield: servings,
  },
}: RecipeProps) => {
  return (
    <RecipeWrapperLink to={`/recipe/${id}`}>
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
      <InfoSection>
        {cautions.length > 0 && (
          <CautionSection>
            {cautions.map((caution) => (
              <Caution key={uuidv4()}>
                <Strong>{caution}</Strong> <Warn />
              </Caution>
            ))}
          </CautionSection>
        )}
        <DietSection>
          {dietLabels.length > 0 &&
            dietLabels.map((diet) => (
              <Diet key={uuidv4()}>
                <Strong>{diet}</Strong> <Check />
              </Diet>
            ))}
        </DietSection>
        <HealthSection>
          {healthLabels.length > 0 &&
            healthLabels.map((health) => (
              <Health key={uuidv4()}>
                <Strong>{health}</Strong> <Check />
              </Health>
            ))}
        </HealthSection>
      </InfoSection>
    </RecipeWrapperLink>
  )
}
