import { useMemo } from 'react';

const useHighlightElements = () => {
  const periodicTableData = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'K', 'Ar', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Ni', 'Co', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'I', 'Te', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'];
  const highlightedCache = {};

  const highlightElements = useMemo(() => {
    return (input) => {
      if (highlightedCache[input]) {
        return highlightedCache[input];
      }

      let highlightedText = [];

      let i = 0;

      while (i < input.length) {
        let element = input[i];

        // Check if the current letter and the next one form an element
        if (i < input.length - 1 && periodicTableData.includes(input[i] + input[i + 1])) {
          element = <span className="highlighted">{input[i] + input[i + 1]}</span>;
          i += 2;
        } else if (periodicTableData.includes(input[i])) {
          element = <span className="highlighted">{input[i]}</span>;
          i += 1;
        } else {
          i += 1;
        }

        highlightedText.push(element);
      }

      highlightedCache[input] = highlightedText;
      return highlightedText;
    };
  }, []);

  return highlightElements;
};

export default useHighlightElements;
