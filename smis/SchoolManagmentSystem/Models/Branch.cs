using System;
using System.ComponentModel.DataAnnotations;

namespace SchoolManagmentSystem.Models
{
	public enum Location
	{
		Prishtinë,
		Ferizaj,
		Gjilan,
		Pejë,
		Lipjan,
		Prizren
	}

	public class Branch
	{
		[Key]
		public int BranchID { get; set; }

		[Required]
		public int SMIAL { get; set; }

        [Required]
        [StringLength(15, ErrorMessage = "Name cannot be longer than 15 characters")]
        public string Name { get; set; }

		public Location? Location { get; set; }


		//relationship

	}
}

