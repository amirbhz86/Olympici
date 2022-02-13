import { BasicColors, MainColors } from '../../../common/index'

const useComponent = () => {
  const renderThemeColors = (
    type: 'danger' | 'success' | 'default' | undefined = 'default',
  ) => {
    switch (type) {
      case 'danger':
        return {
          background: BasicColors.red,
          text: BasicColors.white,
        }
      case 'default':
        return {
          background: MainColors.hint,
          text: BasicColors.white,
        }
      case 'success':
        return {
          background: BasicColors.green,
          text: BasicColors.white,
        }
    }
  }

  return { renderThemeColors }
}

export default useComponent
