import { TableCell as TableCellOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'
import AbstractExtension from '~/extensions/AbstractExtension'

export default class TableCell extends AbstractExtension {
    constructor(options) {
        super(options, TableCellOriginal)
    }

    get availableActions(): ExtensionActionInterface[] {
        return [
            {
                render: new ExtensionActionRenderBtn({
                    tooltip: new I18nText('extensions.TableCell.buttons.table.tooltip'),
                    icons: {
                        [VuetifyIconsGroups.md]: new VuetifyIcon('format_table'),
                        [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-table'),
                        [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-table-column-width'),
                        [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z')
                    },
                    nativeExtensionName: 'table_cell'
                })
            }
        ]
    }
}
