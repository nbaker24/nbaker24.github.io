let NotFound = '/error/error';
//notfound.html?search=
const TAPE = '/tape/tape';
const SUB = 'subcategories/';
let ProductCategories = {
        "Anti-Static": "/anti-static/anti-static",
        "Bins": "/bins/bins",
        "Package Protection": "/bubble/bubble",
        "Cable Ties": "/cable/cableties",
        "Chipboard Cartons": "/chipboardcartons/chipboardcartons",
        "Edge Protection": "/edgeprot/edgeprotection",
        "Gloves": "/gloves/gloves",
        "Janitorial Supplies": "/janitor/janitorialsupplies",
        "Labels": "/labels/labels",
        "Shipping Mailers": "/mailer/mailer",
        "Mailing Tubes": "/mailingtubes/mailingtubes",
        "Maintenance Supplies": "/maintenance/maintenance",
        "Material Handling": "/materialhandling/materialhandling",
        "Moving Boxes": "/movingboxes/movingboxes",
        "Packing List Envelopes": "/packinglistenvelopes/packinglistenvelope",
        "Packing Papers": "/papers/papers",
        "Poly Bags": "/PolyBags/Polybags",
        "Retail": "/retail/retail",
        "Safety Products": "/safetyproducts/safetyproducts",
        "Shrink Film": "/Shrinkfilm/Shrinkfilm",
        "Package Strapping": "/strapping/strapping",
        "Stretch Film": "/Stretchfilm/Stretchfilm",
        "Tags": "/tags/tags",
        "Warehouse Supplies": "/warehousesupplies/warehousesupplies",
    // "Corrugated Boxes": {
        "Corrugated Boxes": "/Corrugatedboxes/Corrugatedbox",
        // "Boxes and supply": "../Corrugatedboxes/corrugatedboxcategories/boxandsupply",
        // "Bulk cargobox": "../Corrugatedboxes/corrugatedboxcategories/bulkcargobox",
        // "Corrugated Bin": "../Corrugatedboxes/corrugatedboxcategories/Corrugatedbin",
        // "Corrugated Display": "../Corrugatedboxes/corrugatedboxcategories/corrugateddisplay",
        // "Easy Foldmailer": "../Corrugatedboxes/corrugatedboxcategories/easy-foldmailer",
        // "File Storage": "../Corrugatedboxes/corrugatedboxcategories/filestorage",
        // "Folding Carton": "../Corrugatedboxes/corrugatedboxcategories/foldingcarton",
        // "Giftbox": "../Corrugatedboxes/corrugatedboxcategories/giftbox",
        // "Hazardous Material": "../Corrugatedboxes/corrugatedboxcategories/hazardousmaterial",
        // "Heavyduty Box": "../Corrugatedboxes/corrugatedboxcategories/heavydutybox",
        // "Insulated Shipper": "../Corrugatedboxes/corrugatedboxcategories/insulatedshipper",
        // "Layerpad": "../Corrugatedboxes/corrugatedboxcategories/layerpad",
        // "Mailer": "../Corrugatedboxes/corrugatedboxcategories/mailer",
        // "Multi-Depth Box": "../Corrugatedboxes/corrugatedboxcategories/multidepthbox",
        // "Pallet": "../Corrugatedboxes/corrugatedboxcategories/pallet",
        // "Sideloading Box": "../Corrugatedboxes/corrugatedboxcategories/sideloadingbox",
    // },
    // "PolyBags": {
        "Poly Bags": "/PolyBags/Polybags",
        // "Amber Bag": "../PolyBags/polybagcategories/amberbag",
        // "Anti Static": "../PolyBags/polybagcategories/antistatic",
        // "Bags On a Roll": "../PolyBags/polybagcategories/bagsonaroll",
        // "Bag Tape": "../PolyBags/polybagcategories/bagtape",
        // "Colored": "../PolyBags/polybagcategories/colored",
        // "Door Knob Bag": "../PolyBags/polybagcategories/doorknobbag",
        // "Flap Lock Bag": "../PolyBags/polybagcategories/flaplockbag",
        // "Flat Bag": "../PolyBags/polybagcategories/flatbag",
        // "Furniture Cover": "../PolyBags/polybagcategories/furniturecover",
        // "Garment Bag": "../PolyBags/polybagcategories/garmentbag",
        // "Gusseted": "../PolyBags/polybagcategories/gusseted",
        // "High Clarity": "../PolyBags/polybagcategories/highclarity",
        // "Pallet Cover": "../PolyBags/polybagcategories/palletcover",
        // "Plastic Sheeting": "../PolyBags/polybagcategories/plasticsheeting",
        // "Poly Tubing": "../PolyBags/polybagcategories/polytubing",
        // "Reclosable Bag": "../PolyBags/polybagcategories/reclosablebag",
        // "Retail Pack": "../PolyBags/polybagcategories/retailpack",
        // "Sealer": "../PolyBags/polybagcategories/sealer",
        // "Slide-Seal": "../PolyBags/polybagcategories/slide-seal",
        // "Static Shielding": "../PolyBags/polybagcategories/staticshielding",
        // "Suffocation Warning Bag": "../PolyBags/polybagcategories/suffocationwarningbag",
        // "Top Sheeting": "../PolyBags/polybagcategories/topsheeting",
        // "Trash Liner": "../PolyBags/polybagcategories/trashliner",
        // "Twist Tie": "../PolyBags/polybagcategories/twisttie",
        // "White Block": "../PolyBags/polybagcategories/whiteblock",
    // },
    // "Shrinkfilm": {
        "Shrink Film": "/Shrinkfilm/Shrinkfilm",
        // "Shrink Film Bags": "../Shrinkfilm/Shrinkfilmcategories/Shrinkfilmbags",
        // "Shrink Film Rolls": "../Shrinkfilm/Shrinkfilmcategories/Shrinkfilmrolls",
    // },
    // "Stretchfilm": {
        "Stretch Film": "/Stretchfilm/Stretchfilm",
        // "Black Opaque": "../Stretchfilm/stretchfilmcategories/blackopaque",
        // "Bundling Film": "../Stretchfilm/stretchfilmcategories/bundlingfilm",
        // "Color": "../Stretchfilm/stretchfilmcategories/color",
        // "Extended Core": "../Stretchfilm/stretchfilmcategories/extendedcore",
        // "Goodwrappers": "../Stretchfilm/stretchfilmcategories/goodwrappers",
        // "Machine": "../Stretchfilm/stretchfilmcategories/machine",
        // "Netting": "../Stretchfilm/stretchfilmcategories/Netting",
        // "Top Sheeting": "../Stretchfilm/stretchfilmcategories/topsheeting",
    // },
    // "Tape": {
        "Tape": "/Tape/tape",
        // "Command Strips": "../Tape/tapecategories/command",
        // "Adhesive Transfer Tape": "../Tape/tapecategories/adhesivetransfer",
        // "Anti-Slip Tape": "../Tape/tapecategories/CartonSealingTape",
        // "Carton Sealing Tape": "../Tape/tapecategories/CartonSealingTape",
        // "Desktop Tape Dispensers": "../Tape/tapecategories/deskdispensers",
        // "Doublesided Foam": "../Tape/tapecategories/doublesidedfoam",
        // "Double Sided Film": "../Tape/tapecategories/doublesidedfilm",
        // "Duct Tape": "../Tape/tapecategories/duct",
        // "Electrical Tape": "../Tape/tapecategories/electrical",
        // "Flatback Tape": "../Tape/tapecategories/CartonSealingTape",
        // "Gluedots": "../Tape/tapecategories/Gluedots.html",
        // "Gummed Dispensers": "../Tape/tapecategories/kraft",
        // "Hand-Held Dispensers": "../Tape/tapecategories/CartonSealingTape",
        // "High Tempurature Tape": "../Tape/tapecategories/hightemperature",
        // "Hook & Loop": "../Tape/tapecategories/Hook&Loop",
        // "Kraft Tape": "../Tape/tapecategories/kraft",
        // "Label Protection Tape": "../Tape/tapecategories/labelprotection",
        // "Machine Tape": "../Tape/tapecategories/CartonSealingTape",
        // "Masking Tape": "../Tape/tapecategories/masking",
        // "Natural Rubber Tape": "../Tape/tapecategories/naturalrubber",
        // "Pre-Printed Tape": "../Tape/tapecategories/CartonSealingTape",
        // "Reflective Tape": "../Tape/tapecategories/security",
        // "Security Tape": "../Tape/tapecategories/security",
        // "Strapping Tape": "../Tape/tapecategories/Strappingtape",
        // "Stretchable Tape": "../Tape/tapecategories/stretchable",
        // "Surface Protection Tape": "../Tape/tapecategories/surfaceprotection"
    // }
}

const levenshteinDistance = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1, // deletion
                track[j - 1][i] + 1, // insertion
                track[j - 1][i - 1] + indicator, // substitution
            );
        }
    }
    return track[str2.length][str1.length];
};

let convertProductCategories;
let NamedSearches = {};
convertProductCategories = function (items, path = []) {
    for (let key in items) {
        let value = items[key];
        if (typeof value == 'object') {
            convertProductCategories(value, [...path, key]);
        } else if (typeof value == 'string') {
            NamedSearches[[...path, key].join(' ').trim()] = value;
            if (key.length > 2) NamedSearches[key.trim()] = value;
        }
    }
};
convertProductCategories(ProductCategories);

console.log(NamedSearches);

let list = document.createElement('datalist');
list.id = "search";
for (let key in NamedSearches) {
    let opt = document.createElement("option");
    opt.value = key;
    list.appendChild(opt);
};
document.body.appendChild(list);

function PerformSearch(event) {
    let entries = Object.keys(NamedSearches).map(o => [o, levenshteinDistance(o, event.target.value)]);
    entries = entries.sort((a, b) => a[1] - b[1]);
    let best = entries[0];
    let [key, score] = best;
    if (score <= (0.5 * event.target.value.length)) {
        event.target.dataset.href = NamedSearches[key];
    } else {
        // do "not found" stuff
        event.target.dataset.href = NotFound;
    }//event.target.value
    // document.getElementById("output").innerHTML = event.target.dataset.href;
};
// document.getElementById("output").innerHTML = '';