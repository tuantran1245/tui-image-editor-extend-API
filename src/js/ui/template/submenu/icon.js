export default ({iconStyle: {normal, active}}) => (`
    <ul class="tui-image-editor-submenu-item">
        <li id="tie-icon-add-button">
            <div class="tui-image-editor-button" data-icontype="icon-arrow">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-arrow"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-arrow"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    Mũi tên
                </label>
            </div>
            <div class="tui-image-editor-button" data-icontype="icon-arrow-2">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-arrow-2"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-arrow-2"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    Mũi tên 2
                </label>
            </div>
            <div class="tui-image-editor-button" data-icontype="icon-arrow-3">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-arrow-3"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-arrow-3"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    Mũi tên 3
                </label>
            </div>
            <div class="tui-image-editor-button" data-icontype="icon-star">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-star" class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-star" class="active"/>
                    </svg>
                </div>
                <label>
                    Ngôi sao 1
                </label>
            </div>
            <div class="tui-image-editor-button" data-icontype="icon-star-2">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-star-2"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-star-2"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    Ngôi sao 2
                </label>
            </div>

            <div class="tui-image-editor-button" data-icontype="icon-polygon">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-polygon"
                            class="normal"/>
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-polygon"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    Lục giác
                </label>
            </div>

            <div class="tui-image-editor-button" data-icontype="icon-location">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-location"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-location"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    Vị trí
                </label>
            </div>

            <div class="tui-image-editor-button" data-icontype="icon-heart">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-heart"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-heart"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    Trái tim
                </label>
            </div>

            <div class="tui-image-editor-button" data-icontype="icon-bubble">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-bubble"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-bubble"
                            class="active"/>
                    </svg>
                </div>
                <label>
                    Khung thoại
                </label>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li id="tie-icon-add-button">
            <div class="tui-image-editor-button" style="margin:0">
                <div>
                    <input type="file" accept="image/*" id="tie-icon-image-file">
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-icon-load" class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-icon-load" class="active"/>
                    </svg>
                </div>
                <label>
                    Tùy biến icon
                </label>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li>
            <div id="tie-icon-color" title="Color"></div>
        </li>
    </ul>
`);
