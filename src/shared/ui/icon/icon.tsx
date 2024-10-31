import cn from "classnames"
import type { SVGProps } from "react"
import { SPRITES_META, type SpritesMap } from "./sprite.gen" // Icon name for a specific sprite, e.g. "common/left"

// Icon name for a specific sprite, e.g. "common/left"
export type IconName<Key extends keyof SpritesMap> = `${Key}/${SpritesMap[Key]}`

// Merging all possible icons names as `sprite/icons` string
export type AnyIconName = { [Key in keyof SpritesMap]: IconName<Key> }[keyof SpritesMap]

// Our icons will extend an SVG element and accept all its props
export interface IconProps extends SVGProps<SVGSVGElement> {
  name: AnyIconName
  ariaLabel?: string
}

/**
 * A function to get and process icons metadata.
 * It was moved out of the Icon component to prevent type inference issues.
 */
const getIconMeta = <Key extends keyof SpritesMap>(name: IconName<Key>) => {
  const [spriteName, iconName] = name.split("/") as [Key, SpritesMap[Key]]
  const { filePath, items } = SPRITES_META[spriteName]
  const { viewBox, width, height } = items[iconName]

  let axis: string
  if (width === height) {
    axis = "xy"
  } else if (width > height) {
    axis = "x"
  } else {
    axis = "y"
  }

  return { filePath, iconName, viewBox, axis }
}

export const Icon = ({ name, className, ariaLabel, ...props }: IconProps) => {
  const { viewBox, filePath, iconName, axis } = getIconMeta(name)

  return (
    <svg
      className={cn("icon", className)}
      viewBox={viewBox}
      data-axis={axis}
      focusable="false"
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      {...props}
    >
      <use href={`/sprites/${filePath}#${iconName}`} />
    </svg>
  )
}
