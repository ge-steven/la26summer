/**
 * cytoscape-bubblesets
 * https://github.com/upsetjs/cytoscape.js-bubblesets
 *
 * Copyright (c) 2020 Samuel Gratzl <sam@sgratzl.com>
 */

import cy from 'cytoscape';
import { ISVGLayer } from 'cytoscape-layers';

interface IPotentialOptions {
    /**
     * how many pixels per potential area group to improve speed
     * @default 4
     */
    pixelGroup?: number;
    morphBuffer?: number;
}
interface IRoutingOptions {
    virtualEdges?: boolean;
    /**
     * maximum number of iterations when computing routes between members
     * @default 100
     */
    maxRoutingIterations?: number;
    morphBuffer?: number;
}
interface IOutlineOptions {
    /**
     * maximum number of iterations when computing the contour
     * @default 20
     */
    maxMarchingIterations?: number;
    edgeR0?: number;
    edgeR1?: number;
    nodeR0?: number;
    nodeR1?: number;
    threshold?: number;
    memberInfluenceFactor?: number;
    edgeInfluenceFactor?: number;
    nonMemberInfluenceFactor?: number;
}

interface IBubbleSetPathOptions extends IOutlineOptions, IPotentialOptions, ISVGPathStyle, IRoutingOptions {
    throttle?: number;
    interactive?: boolean;
    includeLabels?: boolean;
    includeMainLabels?: boolean;
    includeOverlays?: boolean;
    includeSourceLabels?: boolean;
    includeTargetLabels?: boolean;
}
interface ISVGPathStyle {
    style?: CSSStyleDeclaration;
    className?: string;
}
declare class BubbleSetPath {
    #private;
    readonly node: SVGPathElement;
    readonly nodes: cy.NodeCollection;
    readonly edges: cy.EdgeCollection;
    readonly avoidNodes: cy.NodeCollection;
    constructor(adapter: {
        remove(path: BubbleSetPath): boolean;
    }, node: SVGPathElement, nodes: cy.NodeCollection, edges: cy.EdgeCollection, avoidNodes: cy.NodeCollection, options?: IBubbleSetPathOptions);
    update: () => void;
    remove(): boolean;
}

interface IBubbleSetsPluginOptions extends IBubbleSetPathOptions {
    layer?: ISVGLayer;
}
declare class BubbleSetsPlugin {
    #private;
    readonly layer: ISVGLayer;
    constructor(cy: cy.Core, options?: IBubbleSetsPluginOptions);
    destroy(): void;
    addPath(nodes: cy.NodeCollection, edges?: cy.EdgeCollection | null, avoidNodes?: cy.NodeCollection | null, options?: IBubbleSetPathOptions): BubbleSetPath;
    getPaths(): BubbleSetPath[];
    removePath(path: BubbleSetPath): boolean;
    update(): void;
}
declare function bubbleSets(this: cy.Core, options?: IBubbleSetsPluginOptions): BubbleSetsPlugin;

declare function register(cytoscape: (type: 'core' | 'collection' | 'layout', name: string, extension: any) => void): void;
declare namespace cytoscape {
    type Ext2 = (cytoscape: (type: 'core' | 'collection' | 'layout', name: string, extension: any) => void) => void;
    function use(module: Ext2): void;
    interface Core {
        bubbleSets: typeof bubbleSets;
    }
}

export default register;
export { BubbleSetPath, BubbleSetsPlugin, IBubbleSetPathOptions, IBubbleSetsPluginOptions, ISVGPathStyle, bubbleSets, cytoscape };
//# sourceMappingURL=index.d.ts.map
