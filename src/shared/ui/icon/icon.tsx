import cn from 'classnames'
import type { SVGProps } from 'react'
import { SPRITES_META, type SpritesMap } from './sprite.gen'

// Our icons will extend an SVG element and accept all its props
export interface IconProps extends SVGProps<SVGSVGElement> {
    name: AnyIconName
    ariaLabel?: string
}

// Merging all possible icons names as `sprite/icons` string
export type AnyIconName = { [Key in keyof SpritesMap]: IconName<Key> }[keyof SpritesMap]
// Icon name for a specific sprite, e.g. "common/left"
export type IconName<Key extends keyof SpritesMap> = `${Key}/${SpritesMap[Key]}`

export function Icon({ name, className, ariaLabel, ...props }: IconProps) {
    const { viewBox, filePath, iconName, axis } = getIconMeta(name)

    return (
        <svg
            // "icons" isn't inlined because of data-axis attribute
            className={cn('icon', className)}
            viewBox={viewBox}
            /**
             * This prop is used by the "icons" class to set the icons's scaled size
             * @see https://github.com/secundant/neodx/issues/92
             */
            data-axis={axis}
            // prevent icons from being focused when using keyboard navigation
            focusable="false"
            // hide icons from screen readers if no aria-label is provided
            aria-hidden={ariaLabel ? undefined : true}
            aria-label={ariaLabel}
            {...props}
        >
            {/* For example, "/icons/common.svg#favourite". Change a base path if you don't store icons under the "/icons". */}
            <use href={`/sprites/${filePath}#${iconName}`} />
        </svg>
    )
}

/**
 * A function to get and process icons metadata.
 * It was moved out of the Icon component to prevent type inference issues.
 */
const getIconMeta = <Key extends keyof SpritesMap>(name: IconName<Key>) => {
    const [spriteName, iconName] = name.split('/') as [Key, SpritesMap[Key]]
    const {
        filePath,
        items: {
            [iconName]: { viewBox, width, height },
        },
    } = SPRITES_META[spriteName]
    const axis = width === height ? 'xy' : width > height ? 'x' : 'y'

    return { filePath, iconName, viewBox, axis }
}