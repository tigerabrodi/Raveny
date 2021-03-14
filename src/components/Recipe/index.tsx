import { Recipe as TRecipe } from 'types'
import { ATOnlyText, Check, Warn } from 'styles'
import { useMedia } from 'hooks/useMedia'
import { v4 as uuidv4 } from 'uuid'
import {
  RecipeWrapper,
  Image,
  Calories,
  Health,
  HealthList,
  CautionList,
  Serving,
  Caution,
  InfoContainer,
  TitleLink,
  Title,
} from './styles'

type RecipeProps = {
  recipe: TRecipe
}

export const Recipe = ({
  recipe: {
    id,
    label,
    image,
    cautions,
    healthLabels,
    dietLabels,
    yield: servings,
    caloriesPerServing,
  },
}: RecipeProps) => {
  const isMobileLayout = useMedia('max', '425')
  const labels = [...healthLabels, ...dietLabels]
  const shouldTabIndex =
    (labels.length > 8 && isMobileLayout) || labels.length > 15
  return (
    <RecipeWrapper aria-label={label}>
      <Title>
        <TitleLink to={`/recipe/${id}`}>
          <ATOnlyText>Read more about recipe: </ATOnlyText> {label}
        </TitleLink>
      </Title>
      <Image src={image} alt="" aria-hidden="true" />
      <Calories>{caloriesPerServing} Calories</Calories>
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
        {labels.length > 0 && (
          <HealthList tabIndex={shouldTabIndex ? 0 : undefined}>
            {labels.map((label) => (
              <Health key={uuidv4()} aria-label={label}>
                {label} <Check aria-hidden="true" />
              </Health>
            ))}
          </HealthList>
        )}
      </InfoContainer>
    </RecipeWrapper>
  )
}
