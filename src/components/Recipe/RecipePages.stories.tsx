import { recipesData } from 'mocks/data/recipes-data'
import { Recipe as RecipeComponent } from '.'
import { LoadMoreSpinner } from 'components/Spinner'
import { useMedia } from 'hooks/useMedia'
import { Check, Warn } from 'styles'
import { v4 as uuidv4 } from 'uuid'
import {
  RecipesMain,
  RecipesSection,
  RecipesHeading,
  RecipeWrapper,
  Image,
  Calories,
  Serving,
  InfoContainer,
  CautionList,
  Caution,
  HealthList,
  Health,
  TitleLink,
  Title,
} from './styles'

export default {
  component: RecipeComponent,
  title: 'pages/Recipes',
}

export const RecipesPage = () => {
  const isMobileLayout = useMedia('max', '425')

  return (
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
            <RecipeWrapper>
              <Title>
                <TitleLink to={`/recipe`}>{label}</TitleLink>
              </Title>
              <Image src={image} alt="" aria-hidden="true" />
              <Calories>{Math.round(calories / servings)} Calories</Calories>
              <Serving>{servings} Servings</Serving>
              <InfoContainer>
                {cautions.length > 0 && (
                  <CautionList>
                    {cautions.map((caution) => (
                      <Caution key={uuidv4()} aria-label={caution}>
                        {caution} <Warn aria-hidden="true" />
                      </Caution>
                    ))}
                  </CautionList>
                )}
                {[...healthLabels, ...dietLabels].length > 0 && (
                  <HealthList
                    tabIndex={
                      ([...healthLabels, ...dietLabels].length > 8 &&
                        isMobileLayout) ||
                      [...healthLabels, ...dietLabels].length > 15
                        ? 0
                        : undefined
                    }
                  >
                    {[...healthLabels, ...dietLabels].map((label) => (
                      <Health key={uuidv4()} aria-label={label}>
                        {label} <Check aria-hidden="true" />
                      </Health>
                    ))}
                  </HealthList>
                )}
              </InfoContainer>
            </RecipeWrapper>
          )
        )}
      </RecipesSection>
    </RecipesMain>
  )
}

export const RecipesPageWithLoadMoreSpinner = () => {
  const isMobileLayout = useMedia('max', '425')
  return (
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
            <RecipeWrapper>
              <Title>
                <TitleLink to={`/recipe`}>{label}</TitleLink>
              </Title>
              <Image src={image} alt="" aria-hidden="true" />
              <Calories>{Math.round(calories / servings)} Calories</Calories>
              <Serving>{servings} Servings</Serving>
              <InfoContainer>
                {cautions.length > 0 && (
                  <CautionList>
                    {cautions.map((caution) => (
                      <Caution key={uuidv4()} aria-label={caution}>
                        {caution} <Warn aria-hidden="true" />
                      </Caution>
                    ))}
                  </CautionList>
                )}
                {[...healthLabels, ...dietLabels].length > 0 && (
                  <HealthList
                    tabIndex={
                      ([...healthLabels, ...dietLabels].length > 8 &&
                        isMobileLayout) ||
                      [...healthLabels, ...dietLabels].length > 15
                        ? 0
                        : undefined
                    }
                  >
                    {[...healthLabels, ...dietLabels].map((label) => (
                      <Health key={uuidv4()} aria-label={label}>
                        {label} <Check aria-hidden="true" />
                      </Health>
                    ))}
                  </HealthList>
                )}
              </InfoContainer>
            </RecipeWrapper>
          )
        )}
      </RecipesSection>
      <LoadMoreSpinner />
    </RecipesMain>
  )
}
