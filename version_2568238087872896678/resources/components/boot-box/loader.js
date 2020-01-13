define([
    './boot-box-viewModel',
    'ojs/ojcomposite',
    'text!./boot-box-view.html',
    'text!./component.json',
    'css!./boot-box-styles'
], function (
    viewModel,
    Composite,
    view,
    metadata) {
        'use strict';

        Composite.register('boot-box', {
            view: view,
            viewModel: viewModel,
            metadata: JSON.parse(metadata)
        });
    }
);