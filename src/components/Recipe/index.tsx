import React, { ReactElement } from 'react'
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
    // Needed because yield is a reserved word
    yield: recipeYield,
  },
}: RecipeProps): ReactElement => {
  return (
    <RecipeWrapper key={uri} to={`/recipe/${uri}`}>
      <Title> {label} </Title>
      <Image src={image} alt={label} />
      <Calories>
        <Strong>Calories:</Strong> {Math.round(calories)}
      </Calories>
      <Serving>
        <Strong>Servings:</Strong> {recipeYield}
      </Serving>
      {cautions.length > 0 && (
        <CautionWrapper>
          {cautions.map((caution) => (
            <CautionLabel>
              {caution} <Warn />
            </CautionLabel>
          ))}
        </CautionWrapper>
      )}
      {(dietLabels.length > 0 || healthLabels.length > 0) && (
        <LabelWrapper>
          {dietLabels.length > 0 &&
            dietLabels.map((diet) => (
              <DietLabel key={uuidv4()}>
                {diet} <Check />
              </DietLabel>
            ))}
          {healthLabels.length > 0 &&
            healthLabels.map((health) => (
              <HealthLabel key={uuidv4()}>
                {health} <Check />
              </HealthLabel>
            ))}
        </LabelWrapper>
      )}
    </RecipeWrapper>
  )
}
