import { recipesData } from 'mocks/data/recipes-data'
import { LoadMoreSpinner } from 'components/Spinner'
import { Check, Strong, Warn } from 'styles'
import { v4 as uuidv4 } from 'uuid'
import {
  RecipesMain,
  RecipesSection,
  RecipesHeading,
  LoadMoreSpinnerSection,
  RecipeWrapperLink,
  Title,
  Image,
  Calories,
  Serving,
  InfoSection,
  CautionSection,
  Caution,
  DietSection,
  Diet,
  HealthSection,
  Health,
} from './styles'
import { Recipe as RecipeComponent } from '.'

export default {
  component: RecipeComponent,
  title: 'pages/Recipes',
}

export const RecipesPage = () => (
  <RecipesMain>
    <RecipesHeading>456 Results</RecipesHeading>
    <RecipesSection>
      {recipesData.map(
        ({
          label,
          image,
          calories,
          yield: servings,
          cautions,
          dietLabels,
          healthLabels,
        }) => (
          <RecipeWrapperLink to="/">
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
      )}
    </RecipesSection>
  </RecipesMain>
)

export const RecipesPageWithLoadMoreSpinner = () => (
  <RecipesMain>
    <RecipesHeading>456 Results</RecipesHeading>
    <RecipesSection>
      {recipesData.map(
        ({
          label,
          image,
          calories,
          yield: servings,
          cautions,
          dietLabels,
          healthLabels,
        }) => (
          <RecipeWrapperLink to="/">
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
      )}
    </RecipesSection>
    <LoadMoreSpinnerSection>
      <LoadMoreSpinner />
    </LoadMoreSpinnerSection>
  </RecipesMain>
)
